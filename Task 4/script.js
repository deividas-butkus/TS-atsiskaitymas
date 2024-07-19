/* ------------------------------ TASK 4 -----------------------------------
Parašykite TS funkciją, kuri priima tekstą ir grąžina skaičių susidedantį iš vienetų ir nulių tokio ilgio, kokio yra pats žodis. Skaičius visada prasideda vienetu.

Pvz.:
  "labas"   --> 10101
  "kebabas" --> 1010101
  "a"       --> 1
-------------------------------------------------------------------------- */
var convertText = function (text) {
    // if (text.length === 0) {
    //   return 0;
    // } Tai užkomentuoju ir netikrinu, bet palieku komentarą, nes tokiame sprendime paduotas "" grąžina 1, kas nėra skaičius, susidedantis iš tokio ilgio, koks yra pats žodis, kaip kad nurodoma užduotyje.
    var result = "1";
    for (var i = 1; i < text.length; i++) {
        result += i % 2 === 0 ? "1" : "0";
    }
    return parseInt(result);
};
