import express from "express"
import CatCtrl from "./catStatus.controller.js"
import { createContent, getContent } from "../../db/dao/contentDao.js";
import { changeStatus } from "../../db/dao/statusDao.js";

const router = express.Router();

router.get('/', function(req, res) {
    res.send("Test Route");
});

// Get cat status 
router.get('/status', function(req, res) {
    res.send("Hello yozazazaz!");
});

// Change cat status 
router.put('/status', function(req, res) {

});

// Fetch from database
router.get('/database/:id', async function(req, res) {
    const {id} = req.params;
    const content = await getContent(id);
    res.json(content);
});

// Add to database 
router.post('/database', async function(req, res) {
    const data = req.body;
    const newContent = await createContent({
        id: data.id,
        content: data.content,
        type: data.type
    });

    res.status(201).json(newContent);
});

module.exports = router;