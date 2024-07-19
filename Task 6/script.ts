/* ------------------------------ TASK 6 ---------------------------------------------------------------
Sukurkite klasę "Potion", kuri sukuria objektus su 2 savybėm ir 1 metodu:

Savybės:
  color(masyvas tryjų spalvų 0-255), volume
Metodas: 
  mix(potion) - Pateikiamas kitas eliksyras ir jiedu sumaišomi į vieną naują eliksyrą, kuris yra grąžinamas kaip naujas Klasės objektas.

Pvz.: 
  felix_felicis     =  Potion([255, 255, 255],  7)
  polyjuice         =  Potion([ 51, 102,  51], 12)
  new_potion        =  felix_felicis.mix(polyjuice)

  new_potion.color  =  [127, 159, 127]
  new_potion.volume =  19
------------------------------------------------------------------------------------------------------ */

type PotionT = [number, number, number];

class Potion {
  color: PotionT;
  volume: number;

  constructor(color: PotionT, volume: number) {
    this.color = color;
    this.volume = volume;
  }
  mix(potion: Potion): Potion {
    const newVolume = this.volume + potion.volume;
    const newColor: PotionT = [
      Math.ceil(
        (this.color[0] * this.volume + potion.color[0] * potion.volume) /
          newVolume
      ),
      Math.ceil(
        (this.color[1] * this.volume + potion.color[1] * potion.volume) /
          newVolume
      ),
      Math.ceil(
        (this.color[2] * this.volume + potion.color[2] * potion.volume) /
          newVolume
      ),
    ];
    return new Potion(newColor, newVolume);
  }
}
