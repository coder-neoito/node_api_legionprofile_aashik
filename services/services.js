function statsDataProcess(data, season, mode) {
    let filteredData = data.seasonStats.filter(item => item.season == season && item.mode == mode)
    data.seasonStats = filteredData
    return data
}

module.exports = statsDataProcess;