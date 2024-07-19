// import { Player as PlayerT } from "./types.js";
// import Player from "./Player.js";

export default class Team {
  teamName: string;
  abbreviation: string;
  simpleName: string;
  location: string;
  // players: PlayerT[];

  constructor(
    teamName: string,
    abbreviation: string,
    simpleName: string,
    location: string
    // players: PlayerT[]
  ) {
    this.teamName = teamName;
    this.abbreviation = abbreviation;
    this.simpleName = simpleName;
    this.location = location;
    // this.players = players;
  }

  render() {
    const teamCard = document.createElement("div");

    const teamTtl = document.createElement("h2");
    teamTtl.textContent = this.teamName;
    teamCard.classList.add("teamCard");

    const teamAbbr = document.createElement("h4");
    teamAbbr.textContent = this.abbreviation;

    const teamSimpleName = document.createElement("h4");
    teamSimpleName.textContent = this.simpleName;

    const teamLoc = document.createElement("h4");
    teamLoc.textContent = this.location;

    const playersBtn = document.createElement("button");
    playersBtn.textContent = "Players";
    playersBtn.classList.add("playersBrn");

    teamCard.append(teamTtl, teamAbbr, teamSimpleName, teamLoc, playersBtn);

    // this.players.forEach((player) => {
    //   const nbaTeamPlayer = new Player(player);
    //   teamCard.appendChild(nbaTeamPlayer.render());
    // });

    return teamCard;
  }
}
