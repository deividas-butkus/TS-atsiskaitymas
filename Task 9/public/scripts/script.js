import Team from "./modules/Team.js";
const TEAMS_ENDPOINT = "../data/teams.json";
const PLAYERS_ENDPOINT = "players.json";
const output = document.querySelector("#output");
let playersData = [];
let teamsData = [];
fetch(TEAMS_ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
    data.teams.forEach((team) => {
        const nbaTeam = new Team(team.teamName, team.abbreviation, team.simpleName, team.location);
        output === null || output === void 0 ? void 0 : output.appendChild(nbaTeam.render());
    });
});
