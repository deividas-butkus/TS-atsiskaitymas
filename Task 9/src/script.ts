import { Player, Team as TeamT } from "./modules/types.js";
import Team from "./modules/Team.js";

/* ------------------------------ TASK 9 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos: pilnas pavadinimas, paprastas pavadinimas, trumpinys, lokacija ir mygtukas "Players", kurį paspaudus bus kreipiamasi į players.json ir atidaromas modalas su visais TOS komandos žaidėjais.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const TEAMS_ENDPOINT = "../data/teams.json";
const PLAYERS_ENDPOINT = "../data/players.json";

const output = document.querySelector("#output") as HTMLElement;

let playersData: Player[] = [];
let teamsData: Team[] = [];

fetch(TEAMS_ENDPOINT)
  .then((res) => res.json())
  .then((data: { teams: TeamT[] }) => {
    teamsData = data.teams.map(
      (team: TeamT) =>
        new Team(
          team.id,
          team.teamName,
          team.abbreviation,
          team.simpleName,
          team.location
        )
    );

    teamsData.forEach((team: Team) => {
      const teamEl = team.render();
      const button = teamEl.querySelector(".playersBtn");
      if (button) {
        button.addEventListener("click", () => {
          showTeamsDialog(team.id);
        });
      } else {
        console.error("Button not found for team:", team);
      }
      output.appendChild(teamEl);
    });
  });

fetch(PLAYERS_ENDPOINT)
  .then((res) => res.json())
  .then((data: { players: Player[] }) => {
    playersData = data.players;
  });

function getPlayersByTeamId(teamId: number): Player[] {
  return playersData.filter((player) => player.teamId === teamId);
}

function showTeamsDialog(teamId: number) {
  const team = teamsData.find((team) => team.id === teamId);
  if (!team) {
    alert("Team not found.");
    return;
  }

  const teamPlayers = getPlayersByTeamId(teamId);

  const dialog = document.createElement("dialog");
  dialog.classList.add("dialog");

  const dialogContent = document.createElement("div");
  dialogContent.classList.add("modalContent");

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
  closeButton.classList.add("closeDialog");
  closeButton.onclick = () => {
    document.body.removeChild(dialog);
  };
  dialog.appendChild(closeButton);

  dialog.appendChild(dialogContent);
  document.body.appendChild(dialog);
}
