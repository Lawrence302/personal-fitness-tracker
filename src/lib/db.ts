//
///////

// personal-fitness-tracker db
// This is a lightweight wrapper around the native IndexedDB API, making it much easier to use.
import { openDB } from "idb";

// Define an async function called initDB to initialize or open our database
export const initDB = async () => {
  const db = await openDB("calitrackDB", 1, {
    upgrade(db) {
      // we only create the stors if it does not already exist to avoid error
      if (!db.objectStoreNames.contains("exerciseLogs")) {
        const store = db.createObjectStore("exerciseLogs", { keyPath: "id" });

        // Create an index on the 'name' property
        // Index allows fast lookups by exercise name
        store.createIndex("name", "name", { unique: false });
      }
      if (!db.objectStoreNames.contains("activitySessions")) {
        const store = db.createObjectStore("activitySessions", {
          keyPath: "id",
        });

        // Create an index on active property for quick access to current session
        store.createIndex("active", "active", { unique: false });
      }
    },
  });

  return db;
};

/*
1. openDB opens or creates the DB.

2. upgrade defines tables and indexes (called only on first creation or version change).

3. objectStore = a table (exercises, workouts).

4. keyPath = primary key.

5. createIndex = optional, for fast searches.

6. return db = gives access to this database for other operations like getAll, put, delete. 
*/
