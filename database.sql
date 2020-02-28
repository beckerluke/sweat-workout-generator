
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
);

CREATE TABLE "workout_style" (
	"id" SERIAL PRIMARY KEY,
	"reps" INTEGER,
	"sets" INTEGER,
	"time" TIME
);