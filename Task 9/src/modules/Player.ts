import { Player as PlayerT } from "./types.js";

export default class Player {
  player: PlayerT;
  constructor(player: PlayerT) {
    this.player = player;
  }

  render() {
    const playerCard = document.createElement("div");
    playerCard.classList.add("playerCard");

    const fullNameTtl = document.createElement("h3");
    fullNameTtl.textContent =
      this.player.firstName + " " + this.player.lastName;

    playerCard.append(fullNameTtl);

    return playerCard;
  }
}
