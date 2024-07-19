import Team from "./modules/Team.js";
const TEAMS_ENDPOINT = "../data/teams.json";
const PLAYERS_ENDPOINT = "../data/players.json";
const output = document.querySelector("#output");
let playersData = [];
let teamsData = [];
fetch(TEAMS_ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
    teamsData = data.teams.map((team) => new Team(team.id, team.teamName, team.abbreviation, team.simpleName, team.location));
    teamsData.forEach((team) => {
        const teamEl = team.render();
        const button = teamEl.querySelector(".playersBtn");
        if (button) {
            button.addEventListener("click", () => {
                console.log(`Button clicked for team ID: ${team.id}`);
                showTeamsDialog(team.id);
            });
        }
        else {
            console.error("Button not found for team:", team);
        }
        output.appendChild(teamEl);
    });
});
fetch(PLAYERS_ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
    playersData = data.players;
});
function getPlayersByTeamId(teamId) {
    return playersData.filter((player) => player.teamId === teamId);
}
function showTeamsDialog(teamId) {
    console.log(`Showing dialog for team ID: ${teamId}`);
    const team = teamsData.find((team) => team.id === teamId);
    if (!team) {
        alert("Team not found.");
        return;
    }
    const teamPlayers = getPlayersByTeamId(teamId);
    const dialog = document.createElement("dialog");
    dialog.classList.add("dialog");
    const dialogContent = document.createElement("div");
    dialogContent.classList.add("modal-content");
    const dialogTtl = document.createElement("h2");
    dialogTtl.textContent = team.teamName;
    dialogContent.appendChild(dialogTtl);
    teamPlayers.forEach((player) => {
        const playerFullName = document.createElement("h3");
        playerFullName.textContent = player.firstName + " " + player.lastName;
        dialogContent.appendChild(playerFullName);
    });
    dialog.appendChild(dialogContent);
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.onclick = () => {
        document.body.removeChild(dialog);
    };
    dialog.appendChild(closeButton);
    dialog.appendChild(dialogContent);
    document.body.appendChild(dialog);
}
