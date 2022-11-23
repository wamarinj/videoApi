const path = require ("path");
const fs = require("fs/promises");

const Videos = require("../models/videos.models");

const videoService = {
    findAll: async (req, res) => {
        try {
            const { offset, limit } = req.query
            const videos = await Videos.findAll({
                offset: offset || 0,
                limit: limit || 20
            })

            
            res.status(200)
            res.json(videos)
            res.end()
        } catch (error) {
            throw error
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const video = await Videos.findByPk(id)
            res.status(200)
            res.json(video)
            res.end()
        } catch (error) {
            throw error
        }
    },

    createVideo: async (req, res) => {
        try {
            const new_video = await Videos.create(
                req.body
            )
            res.status(201)
            res.json(new_video)
            res.end()
        } catch (error) {
            throw error
        }
    },

    updateVideo: async (req, res) => {
        try {
            const new_video = await Videos.create(
                req.body
            )
            res.status(201)
            res.json(new_video)
            res.end()
        } catch (error) {
            throw error
        }
    },

    deleteVideo: async (req, res) => {
        try {
            const { id } = req.params

            const video = await Videos.findByPk(id)
            await video.destroy()

            res.status(204)
            res.end()
        } catch (error) {
            throw error
        }
    },
}



module.exports = videoService;