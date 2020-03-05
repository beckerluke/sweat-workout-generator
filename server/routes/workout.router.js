const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "exercise"
                        ORDER BY RANDOM()
                        LIMIT $1;`;
                        
    const numberOfExercises = 5;

    pool.query(queryText, [numberOfExercises]).then(result => {
        // Sends back the results in an object
        console.log('result.rows: ', result.rows);
        const selectedExercises = result.rows;
        
        res.send(selectedExercises);
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
    const queryText = `INSERT INTO "${exerciseBodyPart}" ("${exerciseBodyPart}_name", "description")
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