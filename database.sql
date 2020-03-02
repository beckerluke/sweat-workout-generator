
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "exercise" (
    "id" SERIAL PRIMARY KEY,
    "exercise_name" VARCHAR (200) UNIQUE NOT NULL
    "description" description VARCHAR (2000)
);

CREATE TABLE "workout_style" (
	"id" SERIAL PRIMARY KEY,
	"reps" INTEGER,
	"sets" INTEGER,
	"time" TIME
);

-- CREATE TABLE "back_exercises" (
--     "id" SERIAL PRIMARY KEY,
--     "exercise_name" VARCHAR (200) UNIQUE NOT NULL,
--     "description" VARCHAR (2000)
-- );

-- CREATE TABLE "hamstring_exercises" (
--     "id" SERIAL PRIMARY KEY,
--     "name" VARCHAR (200) UNIQUE NOT NULL,
--     "description" VARCHAR (2000)
-- );

-- CREATE TABLE "quad_exercises" (
--     "id" SERIAL PRIMARY KEY,
--     "name" VARCHAR (200) UNIQUE NOT NULL,
--     "description" VARCHAR (2000)
-- );

-- CREATE TABLE "_exercises" (
--     "id" SERIAL PRIMARY KEY,
--     "exercise_name" VARCHAR (200) UNIQUE NOT NULL,
--     "description" VARCHAR (2O00)
-- );