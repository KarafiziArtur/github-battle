import axios from 'axios'

const id = "CLIENT_ID";
const sec = "CLIENT_SECRET";
const param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100')
}

function getTotalStars(repos) {
  return repos.data.reduce(function (prev, curr) {
    return prev + curr.stargazers_count
  }, 0)
}

function getPlayerData(player) {
  return getRepos(player.login)
      .then(getTotalStars)
      .then(function (totalStars) {
        return {
          followers: player.followers,
          totalStars: totalStars
        }
      })
}

function calculateScores(players) {
  return [
      players[0].followers * 3 + players[0].totalStars,
      players[1].followers * 3 + players[1].totalStars
  ]
}

const helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    })).then(function (info) {
      return info.map(function (user) {
        return user.data;
      })
    }).catch(function (err) {
      console.warn('Error in getPlayersInfo', err);
    })
  },
  battle: function (players) {
    let playerOneData = getPlayerData(players[0]);
    let playerTwoData = getPlayerData(players[1]);

    return axios.all([playerOneData, playerTwoData])
        .then(calculateScores)
        .catch(function (err) {
          console.warn('Error in battle get info', err);
        })
  }

};

export default helpers;