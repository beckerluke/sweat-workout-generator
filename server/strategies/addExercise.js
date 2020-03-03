// When user posts an exercise of any kind
const addExercise =
router.post('/add/exercise', (req, res) => {
    console.log(req.body);
    const exercise = req.body;
    const exerciseName = exercise.exerciseName;
    const exerciseDescription = exercise.exerciseDescription;
    const exerciseBodyPart = exercise.exerciseBodyPart;

    const queryText = `INSERT INTO ${exerciseBodyPart} ("exercise_name", "description")
                        VALUES ($1, $2);`;

    const queryValues = [exerciseName, exerciseDescription];
    
    pool.query(queryText, queryValues) 
        .then(() => {res.sendStatus(201);})
        .catch((err) => {
            console.log('ERROR POSTING EXERCISE IN DB', err);
            res.sendStatus(500)
        });

});

module.exports = addExercise;