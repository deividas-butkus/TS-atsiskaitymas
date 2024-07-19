export default class Team {
  id: number;
  teamName: string;
  abbreviation: string;
  simpleName: string;
  location: string;

  constructor(
    id: number,
    teamName: string,
    abbreviation: string,
    simpleName: string,
    location: string
  ) {
    this.id = id;
    this.teamName = teamName;
    this.abbreviation = abbreviation;
    this.simpleName = simpleName;
    this.location = location;
  }

  render() {
    const teamCard = document.createElement("div");
    teamCard.classList.add("teamCard");

    const teamTtl = document.createElement("h2");
    teamTtl.textContent = this.teamName;

    const teamAbbr = document.createElement("h4");
    teamAbbr.textContent = this.abbreviation;

    const teamSimpleName = document.createElement("h4");
    teamSimpleName.textContent = this.simpleName;

    const teamLoc = document.createElement("h4");
    teamLoc.textContent = this.location;

    const playersBtn = document.createElement("button");
    playersBtn.textContent = "Players";
    playersBtn.classList.add("playersBtn");

    teamCard.append(teamTtl, teamAbbr, teamSimpleName, teamLoc, playersBtn);

    return teamCard;
  }
}
