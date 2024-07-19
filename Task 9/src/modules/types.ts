type Player = {
  id: number;
  firstName: string;
  lastName: string;
  teamId: number;
};

type Team = {
  id: number;
  abbreviation: string;
  teamName: string;
  simpleName: string;
  location: string;
};

export { Player, Team };
