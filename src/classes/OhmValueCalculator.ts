import { IBandColors } from "../interfaces/IBandColors";
import { IOhmValueCalculator } from "../interfaces/IOhmValueCalculator";

export class OhmValueCalculator implements IOhmValueCalculator {

    private _bandColors: IBandColors;

    constructor(bandColors: IBandColors) {
        this._bandColors = bandColors;
    }

    public calculateOhmValue(bandAColor: string, bandBColor: string, bandCColor: string, bandDColor: string): number {
        const firstTwoDigitsValues = this._bandColors.firstTwoDigitsValues;
        const firstTwoDigits = (firstTwoDigitsValues[bandAColor] * 10) + firstTwoDigitsValues[bandBColor];
        const multiplier = 10 ** this._bandColors.multiplierPowers[bandCColor];

        const ohmValue = firstTwoDigits * multiplier;
        return ohmValue;
    }
}