import { Player, Team as TeamT } from "./modules/types.js";
import Team from "./modules/Team.js";

/* ------------------------------ TASK 9 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos: pilnas pavadinimas, paprastas pavadinimas, trumpinys, lokacija ir mygtukas "Players", kurį paspaudus bus kreipiamasi į players.json ir atidaromas modalas su visais TOS komandos žaidėjais.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const TEAMS_ENDPOINT = "../data/teams.json";
const PLAYERS_ENDPOINT = "players.json";

const output = document.querySelector("#output") as HTMLElement;

let playersData: Player[] = [];
let teamsData: Team[] = [];

fetch(TEAMS_ENDPOINT)
  .then((res) => res.json())
  .then((data: { teams: TeamT[] }) => {
    data.teams.forEach((team: TeamT) => {
      const nbaTeam = new Team(
        team.teamName,
        team.abbreviation,
        team.simpleName,
        team.location
      );
      output?.appendChild(nbaTeam.render());
    });
  });
