const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

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
    const queryText = `SELECT * FROM "exercise"
                        WHERE "type" = '${bodyPart}'
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
 * GET FROM YOUTUBE API VIDEO OF EXERCISE
 */
router.get('/video', (req, res) => {
    console.log(req.query);
    const exerciseNameArray = req.query.exerciseName.split(' ');
    let exerciseNameForQuery = ``;
    /* if the name of the exercise is two or more words, place '%20'
    * between words so that youTube API HTTP request works
    */
    if (exerciseNameArray.length > 1) {
        exerciseNameForQuery = (exerciseNameArray.join('%20'));
    } else {
        exerciseNameForQuery = exerciseNameArray[0];
    }
    console.log(exerciseNameForQuery);
    
    // ping YouTube Data API
    let googleQuery = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${exerciseNameForQuery}%20exercise&type=video&videoDefinition=high&key=${process.env.YOUTUBE_API}`
        
    axios.get(googleQuery).then(result => {
        console.log('YouTube search results: ', result.data.items[0].id.videoId)
        const youTubeVideoId = result.data.items[0].id.videoId;
        res.send(youTubeVideoId);
    }).catch(err => {
        console.log('Error getting YouTube Data', err);
    })

    .catch(error => {
        console.log('error in api/workout/video', error);
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