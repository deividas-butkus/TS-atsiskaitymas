type Player = {
  firstName: string;
  lastName: string;
  googleSearch: string;
};

type Team = {
  id: number;
  name: string;
  players: Player[];
};

type TeamsData = {
  teams: Team[];
};

export { Player, Team, TeamsData };
