var mongoose = require("mongoose");
const headers = mongoose.model("headers");
const stats = mongoose.model("stats");
const rolesOpening = mongoose.model("rolesOpenings");
const profiles = mongoose.model("profiles");
const statsDataProcess = require('../services/services')

exports.getHeaders = async (req, res) => {
    try {
        let data = await headers.findOne()
        if (!data) throw 'Unknown error has been occured'
        return res.send({ status: true, data, message: 'Success' })
    } catch (e) {
        console.log(e)
        return res.send({ status: false, message: e })
    }
}

exports.getProfile = async (req, res) => {
    try {
        if (!req.query.id) throw 'Unknown error has been occured'
        let data = await profiles.findById(req.query.id)
        if (!data) throw 'Unknown error has been occured'
        return res.send({ status: true, data, message: 'Success' })
    } catch (e) {
        console.log(e)
        return res.send({ status: false, message: e })
    }
}

exports.getroleOpening = async (req, res) => {
    try {
        if (!req.query.id) throw 'Unknown error has been occured'
        let data = await rolesOpening.findOne({ playerId: req.query.id })
        if (!data) throw 'Unknown error has been occured'
        return res.send({ status: true, data, message: 'Success' })
    } catch (e) {
        console.log(e)
    }
}

exports.getStats = async (req, res) => {
    try {
        if (!req.query.id) throw 'Unknown error has been occured'
        let data = await stats.findOne({ playerId: req.query.id })
        if (!data) throw 'Unknown error has been occured'
        let finalData = statsDataProcess(data, req.query.season, req.query.mode)
        if (!finalData) throw 'No data preview available'
        return res.send({ status: true, data: finalData, message: 'Success' })
    } catch (e) {
        console.log(e)
    }
}

