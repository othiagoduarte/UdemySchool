import { Spacecraft, Containership } from './base-ships';

class MillenionFalcon extends Spacecraft implements Containership {

    cargoContainers: number;

    constructor() {
        super('hiperdrive'),
        this.cargoContainers = 2
    }

    jumpIntoHyperSpace() {
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperSpace();
        } else {
            console.log('Failed to jump into hyperspace');
        }
    }

} 

export {MillenionFalcon}