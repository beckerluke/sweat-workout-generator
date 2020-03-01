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
    const exerciseName = req.body.exercise;

    const queryText = `INSERT INTO "exercise" ("exercise_name")
                        VALUES ($1);`;

    pool.query(queryText, [exerciseName]) 
        .then(() => {res.sendStatus(201);})
        .catch((err) => {
            console.log('ERROR POSTING EXERCISE IN DB', err);
            res.sendStatus(500)
        });

});

module.exports = router;