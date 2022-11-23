const videoService = require("../services/videos.services");

const getVideos = async (req, res, next) => {

    try {
        await videoService.findAll(req, res);
    } catch (error){
        console.log(error)
        next({
            status: 418,
            errorMessage: error
        })
    }
}

const getVideoById = async (req, res, next) => {

    try {
        await videoService.getById(req, res);
    } catch (error){
        console.log(error)
        next({
            status: 418,
            errorMessage: error
        })
    }
}

const createVideos = async (req, res) => {
    try {
        await videoService.createVideo(req, res);
        
    } catch (error){
        console.log(error);
        next({
            status: 418,
            errorMessage: error
        })
    }
}

const updateVideos = async (req, res) => {
    try {
        updateVideos = req.body;
        const { id } = req.params;
        const result = await (actualizarVideos, id) ;
        res.json(result)
    } catch (error) {
        console.log(error);
    }
}

const deleteVideos = async (req, res) => {
    try {
        await videoService.deleteVideo(req, res);

    } catch (error){
        console.log (error);
    }
}

module.exports = {
    getVideos, 
    createVideos,
    updateVideos,
    deleteVideos,
    getVideoById,

};