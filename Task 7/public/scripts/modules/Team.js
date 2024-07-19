import Player from "./Player.js";
export default class Team {
    constructor(name, players) {
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
