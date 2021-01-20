const axios = require('axios')
const { JSDOM } = require('jsdom')

const SEASON_SCHEDUlE_2020_URL =
  'http://data.nba.net/prod/v1/2020/schedule.json'
const TEAMS_2020_URL = 'http://data.nba.net/prod/v2/2020/teams.json'

async function fetchNailBiters(date) {
  const teamsMap = await getTeamsMap()
  const playedGames = await getPlayedGames()

  return playedGames
    .filter(isNailbiter)
    .map(nailbiter => enrichGameObj(nailbiter, teamsMap))
}

// Helpers
// .

function enrichGameObj(nailbiter, teamsMap) {
  const vTeamMeta = teamsMap[nailbiter.vTeam.teamId]
  const hTeamMeta = teamsMap[nailbiter.hTeam.teamId]
  const highlightVideoUrl =
    getHighlightVideoUrl() || 'https://www.youtube.com/embed/Yfcyk8T7bY0'

  return {
    ...nailbiter,
    vTeam: { ...nailbiter.vTeam, ...vTeamMeta },
    hTeam: { ...nailbiter.hTeam, ...hTeamMeta },
    highlightVideoUrl,
  }
}

function gameStatus(statusNum) {
  switch (statusNum) {
    case 1:
      return 'Not yet played'
    case 2:
      return 'In progress'
    case 3:
      return 'Completed'
    default:
      return 'unknown'
  }
}

function getHighlightVideoUrl() {
  // just testing out how JSDOM works...
  const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`)
  // const html = await axios.get(
  //   `https://www.youtube.com/results?search_query=20201215+GSW+SAC`
  // )
  // const dom = new JSDOM(html)
  // const searchResults = dom.window.document.querySelector('#contents').innerHTML
  //
  // console.log('searchResults>>>', searchResults)
}

async function getPlayedGames() {
  const scheduleResp = await axios.get(SEASON_SCHEDUlE_2020_URL)
  const regularSeasonGames = scheduleResp.data.league.standard
  return regularSeasonGames.filter(
    game => gameStatus(game.statusNum) === 'Completed'
  )
}

async function getTeamsMap() {
  const teamResp = await axios.get(TEAMS_2020_URL)
  const teams = teamResp.data.league.standard
  return teams.reduce((acc, team) => {
    acc[team.teamId] = {
      fullName: team.fullName,
      tricode: team.tricode,
      nickname: team.nickname,
    }
    return acc
  }, {})
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
