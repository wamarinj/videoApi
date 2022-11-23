const express = require("express");
const {
    getVideos,
    createVideos,
    updateVideos,
    deleteVideos,
    getVideoById,

}  = require("../controllers/videos.controllers");

const router = express.Router();

router.get("/videos", getVideos);
router.get("/videos/:id", getVideoById);

router.post("/videos", createVideos);

router.put("/videos/:id", updateVideos);

router.delete("/videos/:id", deleteVideos);

module.exports = router;