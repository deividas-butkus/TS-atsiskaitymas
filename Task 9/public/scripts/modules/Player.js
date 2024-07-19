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
        const googleSearchLink = document.createElement("a");
        googleSearchLink.href = this.player.googleSearch;
        googleSearchLink.textContent = "Search on Google";
        googleSearchLink.target = "_blank";
        playerCard.append(fullNameTtl, googleSearchLink);
        return playerCard;
    }
}
