import { TeamsData, Team as TeamT } from "./modules/types.js";
import Team from "./modules/Team.js";

/* ------------------------------ TASK 7 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas ir jų žaidėjus. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos pavadinimas ir papildomose "mini kortelėse" išvardinti žaidėjai su vardais, pavardėmis ir nuoroda į daugiau informacijos apie juos.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "../data/NBA.json";

const output = document.querySelector("#output") as HTMLElement;

fetch(ENDPOINT)
  .then((res) => res.json())
  .then((data: TeamsData) => {
    data.teams.forEach((team: TeamT) => {
      const nbaTeam = new Team(team.name, team.players);
      output?.appendChild(nbaTeam.render());
    });
  });
