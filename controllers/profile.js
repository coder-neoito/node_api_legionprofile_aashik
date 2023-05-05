const gameDB = require('../models/profile');
const rolesOpening = require('../models/rolesOpening');
const stats = require('../models/stats');
const statsDataProcess = require('../services/services')

exports.getProfile = async (req, res) => {
    try {
        if (!req.query.id) throw 'Unknown error has been occured'
        let data = await gameDB.findbyID(req.query.id)
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
        let data = await rolesOpening.findbyID(req.query.id)
        if (!data) throw 'Unknown error has been occured'
        return res.send({ status: true, data, message: 'Success' })
    } catch (e) {
        console.log(e)
    }
}

exports.getStats = async (req, res) => {
    try {
        if (!req.query.id) throw 'Unknown error has been occured'
        let data = await stats.findbyID(req.query.id)
        if (!data) throw 'Unknown error has been occured'
        let finalData = statsDataProcess(data, req.query.season, req.query.mode)
        if (!finalData) throw 'No data preview available'
        return res.send({ status: true, data: finalData, message: 'Success' })
    } catch (e) {
        console.log(e)
    }
}

