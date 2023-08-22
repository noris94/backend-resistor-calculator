export interface IOhmValueCalculator {
    /**
     * Calculates the Ohm value of a resistor based on the band colors.
     * @param bandAColor The color of the first figure of component value band.
     * @param bandBColor The color of the second significant figure band.
     * @param bandCColor The color of the decimal multiplier band.
     * @param bandDColor The color of the tolerance value band.
     * @returns The calculated Ohm value.
     */
    calculateOhmValue(bandAColor: string, bandBColor: string, bandCColor: string, bandDColor: string): number;
}