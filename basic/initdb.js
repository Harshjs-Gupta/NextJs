const sql = require("better-sqlite3");
const path = require("path");

// Dynamically set the database path
const dbPath =
  process.env.NODE_ENV === "production"
    ? path.join("/tmp", "meals.db") // Writable directory in production
    : path.join(process.cwd(), "meals.db"); // Local directory

const db = sql(dbPath);

// Dummy meals data
const dummyMeals = [
  /* Your meal objects */
];

// Create the `meals` table if it doesn't exist
db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

// Insert initial data into the table
async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    try {
      stmt.run(meal);
    } catch (error) {
      console.error("Failed to insert meal:", meal.slug, error);
    }
  }
}

initData();
