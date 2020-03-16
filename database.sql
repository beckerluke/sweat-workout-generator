
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "workout_style" (
	"id" SERIAL PRIMARY KEY,
	"reps" INTEGER,
	"sets" INTEGER,
	"time" TIME
);

-- EXERCISES BY BODY PART
CREATE TABLE "back_exercises" (
    "id" SERIAL PRIMARY KEY,
    "back_exercises_name" VARCHAR (200) UNIQUE NOT NULL,
    "back_exercises_description" VARCHAR (2000)
);

CREATE TABLE "chest_exercises" (
    "id" SERIAL PRIMARY KEY,
    "chest_exercises_name" VARCHAR (200) UNIQUE NOT NULL,
    "chest_exercises_description" VARCHAR (2000)
);

CREATE TABLE "shoulder_exercises" (
    "id" SERIAL PRIMARY KEY,
    "shoulder_exercises_name" VARCHAR (200) UNIQUE NOT NULL,
    "shoulder_exercises_description" VARCHAR (2000)
);

CREATE TABLE "quad_exercises" (
    "id" SERIAL PRIMARY KEY,
    "quad_exercises_name" VARCHAR (200) UNIQUE NOT NULL,
    "quad_exercises_description" VARCHAR (2000)
);

CREATE TABLE "hamstring_exercises" (
    "id" SERIAL PRIMARY KEY,
    "hamstring_exercises_name" VARCHAR (200) UNIQUE NOT NULL,
    "hamstring_exercises_description" VARCHAR (2000)
);

CREATE TABLE "core_exercises" (
    "id" SERIAL PRIMARY KEY,
    "core_exercises_name" VARCHAR (200) UNIQUE NOT NULL,
    "core_exercises_description" VARCHAR (2000)
);

CREATE TABLE "triceps_exercises" (
    "id" SERIAL PRIMARY KEY,
    "triceps_exercises_name" VARCHAR (200) UNIQUE NOT NULL,
    "triceps_exercises_description" VARCHAR (2000)
);

CREATE TABLE "biceps_exercises" (
    "id" SERIAL PRIMARY KEY,
    "biceps_exercises_name" VARCHAR (200) UNIQUE NOT NULL,
    "biceps_exercises_description" VARCHAR (2000)
);
-- END OF EXERCISES BY BODY PART

CREATE TABLE "hiit_exercises" (
    "id" SERIAL PRIMARY KEY,
    "hiit_exercises_name" VARCHAR (200) UNIQUE NOT NULL,
    "hiit_exercises_description" VARCHAR (2000)
);
-- CREATE TABLE "workout_log" (
--     "id" PRIMARY SERIAL KEY,
--     "date" timestamp,
-- )