import Team from "./modules/Team.js";
const ENDPOINT = "../data/NBA.json";
const output = document.querySelector("#output");
fetch(ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
    data.teams.forEach((team) => {
        const nbaTeam = new Team(team.name, team.players);
        output === null || output === void 0 ? void 0 : output.appendChild(nbaTeam.render());
    });
});
