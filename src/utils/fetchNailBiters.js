const axios = require('axios')

async function fetchNailBiters(date) {
  const regularSeasonGamesResp = await axios.get(
    'http://data.nba.net/prod/v1/2020/schedule.json'
  )
  const regularSeasonGames = regularSeasonGamesResp.data.league.standard

  const pastGames = regularSeasonGames.filter(game => game.statusNum === 3)

  return pastGames.filter(isNailbiter)
}

function isNailbiter(game) {
  return (
    wasBuzzerBeater(game) ||
    wentPastRegulation(game) ||
    wasCloseScoreAtEnd(game)
  )
}

function wentPastRegulation(game) {
  return game.period.current > 4
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

module.exports = fetchNailBiters
