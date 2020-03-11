const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const BODY_PART_ARRAY = require('../strategies/BodyPart');
/**
 * GET route template
 */
router.get('/total/body', (req, res) => {

    const queryText = `SELECT * FROM  "back_exercises", "chest_exercises", 
                        "shoulder_exercises", "quad_exercises", "hamstring_exercises", 
                        "core_exercises", "biceps_exercises", "triceps_exercises"
                        ORDER BY RANDOM()
                        LIMIT 1;`;

    pool.query(queryText).then(result => {
        // Sends back the results in an object
        console.log('result.rows: ', result.rows);
        // convert object of exercises into array for loop possibility
        const selectedExercises = Object.entries(result.rows[0]);
        // remove unnecessary id
        const itemToRemove = selectedExercises.shift();
        const exercisesArray = selectedExercises.filter(item => item !== itemToRemove);
        /* convert exercise data from database into an organized array of
        objects according to body part exercise name and description */
        const convertedExercisesArray = [];
        for (let i = 0; i < exercisesArray.length; i+=2) {
            let entries = new Map([
                exercisesArray[i],
                exercisesArray[i+1],
            ]);
            convertedExercisesArray.push(Object.fromEntries(entries));
        }
        console.log('convertedExercises: ', convertedExercisesArray)
        
        res.send(convertedExercisesArray);
    })
    .catch(error => {
        console.log('error getting exercises', error);
        res.sendStatus(500);
    }); 
});

/**
 * POST route template
 */
router.post('/add/exercise', (req, res) => {
    console.log(req.body);
    const exercise = req.body;
    const exerciseName = exercise.exerciseName;
    const exerciseDescription = exercise.exerciseDescription;
    const exerciseBodyPart = exercise.exerciseBodyPart;

    // Insert into whichever body part exercise table selected by user
    const queryText = `INSERT INTO "${exerciseBodyPart}" ("${exerciseBodyPart}_name", "${exerciseBodyPart}_description")
                        VALUES ($1, $2);`;

    const queryValues = [exerciseName, exerciseDescription];
    
    pool.query(queryText, queryValues) 
        .then(() => {res.sendStatus(201);})
        .catch((err) => {
            console.log('ERROR POSTING EXERCISE IN DB', err);
            res.sendStatus(500)
        });

});

module.exports = router;