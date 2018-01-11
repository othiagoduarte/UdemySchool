/*
 * Aula de Variaveis TS x JS
 *

let message: string = "Hello World, Obi-Wan Kenobi.";
console.log(message);

let episode: number = 4;
console.log("This is episode " + 4);
episode += 1
console.log("Next episode is " + episode);

let favoriteDroid: string;
favoriteDroid = 'BB-8';
console.log("My favorite droid is " + favoriteDroid);

*
* Aula de Functions TS x JS
*

let isEnoughToMeatMF = function (parsecs: number) : boolean {
    return parsecs < 12
}

let distance = 11;
console.log(`Is ${distance} parsecs enough to beat Millenion Falcon? ${isEnoughToMeatMF(distance) ? 'YES' : 'NO'}`);

let call = (name: string) => console.log(`Do you copy, ${name}`);
call('R2');

function inc (speed: number, inc:number = 1) : number {
    return speed + inc;
}

console.log(`inc (5,1) = ${inc(5, 1)}`);
console.log(`inc (5) = ${inc(5)}`); */

/*
 * Aula de Classes e Interfaces TS x JS
 */

import { Spacecraft, Containership  } from './base-ships';
import { MillenionFalcon } from './starfighters';

let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperSpace();

let falcon = new MillenionFalcon();
falcon.jumpIntoHyperSpace();

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2;
console.log(`Is Falcon good for the job? ${goodForTheJob(falcon) ? 'YES' : 'NO'}`);