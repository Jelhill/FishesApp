const express = require("express")
const router = express.Router()
const db = require("../db/db")

router.get("/home", async (req, res, next) => {
    try {
        const result = await db.query("SELECT * FROM fishes");
        res.json(result.rows)
        console.log(result.rows)
    } catch (error) {
        next(error)
    }
})

router.post("/home", async (req, res, next) => {
    try {
        const postReq = await db.query("INSERT INTO fishes (name, type) VALUES ($1, $2)", [req.body.name, req.body.type])
        res.send("Successfully Posted")
    } catch (error) {
        next(error)
    }
})

router.delete("/home/:id", async(req, res, next) => {
    try {
        const { id } = req.params
        const deleteFish = await db.query("DELETE FROM fishes WHERE id = $1", [id])
        res.send("SuccessFully Deleted")
    } catch (error) {
        next(error)
    }
})

router.put("/home/:id", async(req, res, next) => {
    try {
        const { id } = req.params
        const {name, type} = req.body
        const editFish = await db.query("UPDATE fishes SET name = $1, type = $2 WHERE id = $3", [name, type, id])
        res.send("SuccessFully edited")
    } catch (error) {
        next(error)
    }
})
module.exports = router