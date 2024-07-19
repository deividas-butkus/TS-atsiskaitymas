/* ------------------------------ TASK 5 -----------------------------------
Parašykite TS funkciją, kuri atlieka žirklės/popierius/akmuo žaidimo patikrinimą ir grąžina atsakymą.
Funkcija priima du tekstus ir grąžina tekstą.

Pvz.:
  "scissors", "paper" --> "Player 1 won!"
  "scissors", "rock" --> "Player 2 won!"
  "paper", "paper" --> "Draw!"
-------------------------------------------------------------------------- */
var checkWinner = function (p1Bet, p2Bet) {
    if (p1Bet === p2Bet) {
        return "Draw!";
    }
    if ((p1Bet === "rock" && p2Bet === "scissors") ||
        (p1Bet === "scissors" && p2Bet === "paper") ||
        (p1Bet === "paper" && p2Bet === "rock")) {
        return "Player 1 won!";
    }
    else {
        return "Player 2 won!";
    }
};
