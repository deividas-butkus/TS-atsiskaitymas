export default class Player {
    constructor(player) {
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
