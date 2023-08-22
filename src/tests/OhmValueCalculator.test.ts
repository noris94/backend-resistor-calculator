import { OhmValueCalculator } from "../classes/OhmValueCalculator";

const bandColors = {
    "firstTwoDigitsValues": {
        "black": 0,
        "brown": 1,
        "red": 2,
        "orange": 3,
        "yellow": 4,
        "green": 5,
        "blue": 6,
        "violet": 7,
        "grey": 8,
        "white": 9
    },
    "tolerances": {
        "brown": 1,
        "red": 2,
        "gold": 5,
        "silver": 10
    },
    "multiplierPowers": {
        "black": 0,
        "brown": 1,
        "red": 2,
        "orange": 3,
        "yellow": 4,
        "green": 5,
        "blue": 6,
        "violet": 7,
        "grey": 8,
        "white": 9,
        "gold": -1,
        "silver": -2
    }
};

const calculator = new OhmValueCalculator(bandColors);

describe('OhmValueCalculator', () => {
    it('calculates the Ohm value correctly', () => {
        // Test cases
        expect(calculator.calculateOhmValue('brown', 'black', 'brown', 'gold')).toBe(100);
        expect(calculator.calculateOhmValue('blue', 'violet', 'yellow', 'silver')).toBe(670000);
        expect(calculator.calculateOhmValue('black', 'blue', 'black', 'gold')).toBe(6);
        expect(calculator.calculateOhmValue('green', 'orange', 'yellow', 'red')).toBe(530000);
        expect(calculator.calculateOhmValue('violet', 'violet', 'yellow', 'brown')).toBe(770000);

    });
});