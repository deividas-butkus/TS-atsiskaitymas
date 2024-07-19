import { Player as PlayerT } from "./types.js";
import Player from "./Player.js";

export default class Team {
  name: string;
  players: PlayerT[];

  constructor(name: string, players: PlayerT[]) {
    this.name = name;
    this.players = players;
  }

  render() {
    const teamCard = document.createElement("div");

    const teamTtl = document.createElement("h2");
    teamTtl.textContent = this.name;
    teamCard.classList.add("teamCard");

    teamCard.appendChild(teamTtl);

    this.players.forEach((player) => {
      const nbaTeamPlayer = new Player(player);
      teamCard.appendChild(nbaTeamPlayer.render());
    });

    return teamCard;
  }
}
