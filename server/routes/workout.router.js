const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const BODY_PART_ARRAY = require('../strategies/BodyPart');

/**
 * GET Full BODY WORKOUT
 */
router.get('/full/body', (req, res) => {
    // query to get a random row for each body part type
    const queryText = `SELECT DISTINCT ON ("type") *
                        FROM "exercise"
                        ORDER BY "type", random();`;

    pool.query(queryText).then(result => {
        // Sends back the results in an object
        console.log('result.rows: ', result.rows);
        // send random total body exercises
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error getting exercises', error);
        res.sendStatus(500);
    }); 
});

/**
 * GET INDIVIDUAL WORKOUT 
 */
router.get('/bodyPart', (req, res) => {
    // individual body part sent in the query by client
    const bodyPart = req.query.bodyPart;
    const queryText = `SELECT * FROM "${bodyPart}"
                        ORDER BY RANDOM()
                        LIMIT $1;`;
                        
    const numberOfExercises = 4;

    pool.query(queryText, [numberOfExercises]).then(result => {
        // Sends back the results in an object
        // remove unnecessary id
 
        console.log('result.rows: ', result.rows);
        const backExercisesArray = result.rows;
        
        res.send(backExercisesArray);
    })
    .catch(error => {
        console.log('error getting exercises', error);
        res.sendStatus(500);
    });
});


/**
 * POST INDIVIDUAL WORKOUT
 */
// router.post('/add/exercise', (req, res) => {
//     console.log(req.body);
//     const exercise = req.body;
//     const exerciseName = exercise.exerciseName;
//     const exerciseDescription = exercise.exerciseDescription;
//     const exerciseBodyPart = exercise.exerciseBodyPart;

//     // Insert into whichever body part exercise table selected by user
//     const queryText = `INSERT INTO "${exerciseBodyPart}" ("${exerciseBodyPart}_name", "${exerciseBodyPart}_description")
//                         VALUES ($1, $2);`;

//     const queryValues = [exerciseName, exerciseDescription];
    
//     pool.query(queryText, queryValues) 
//         .then(() => {res.sendStatus(201);})
//         .catch((err) => {
//             console.log('ERROR POSTING EXERCISE IN DB', err);
//             res.sendStatus(500)
//         });

// });

/**
 * POST INDIVIDUAL EXERCISE
 */
router.post('/add/exercise', (req, res) => {
    console.log(req.body);
    const exercise = req.body;
    const exerciseName = exercise.exerciseName;
    const exerciseDescription = exercise.exerciseDescription;
    const exerciseType = exercise.exerciseType;

    // Insert into whichever body part exercise table selected by user
    const queryText = `INSERT INTO "exercise" ("name", "description", "type")
                        VALUES ($1, $2, $3);`;

    const queryValues = [exerciseName, exerciseDescription, exerciseType];
    
    pool.query(queryText, queryValues) 
        .then(() => {res.sendStatus(201);})
        .catch((err) => {
            console.log('ERROR POSTING EXERCISE IN DB', err);
            res.sendStatus(500)
        });

});

module.exports = router;