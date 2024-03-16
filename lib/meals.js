import sql from "better-sqlite3";

const db = sql("meals.db");


export async function getMeals() {
    console.log("getMeals")
    await new Promise((resolve) => setTimeout(resolve, 5000))
    // throw new Error('Loading meals Failed !')
    return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
    return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug)
}