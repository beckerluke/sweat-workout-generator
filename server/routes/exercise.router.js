const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
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