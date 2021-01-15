const axios = require('axios')

async function analyzeDailyGames(date) {
  const NBA_DATA = `http://data.nba.net/10s/prod/v1/${date}/scoreboard.json`
  const resp = await axios.get(NBA_DATA)

  return resp.data.games.filter(isNailbiter)
}

function isNailbiter(game) {
  return (
    wasBuzzerBeater(game) ||
    wentPastRegulation(game) ||
    wasCloseScoreAtEnd(game)
  )
}

function wentPastRegulation(game) {
  return game.hTeam.linescore.length > 4
}

function wasCloseScoreAtEnd(game) {
  const scoreDiff = Math.abs(
    parseInt(game.vTeam.score) - parseInt(game.hTeam.score)
  )
  return scoreDiff < 5
}

function wasBuzzerBeater(game) {
  return game.isBuzzerBeater
}

module.exports = analyzeDailyGames
