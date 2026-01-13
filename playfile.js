import { DateTime } from "luxon";
const now = new Date().toISOString();
console.log("date", new Date().toISOString().split("T")[0]);
console.log("luxon date", DateTime.now().toISODate());
