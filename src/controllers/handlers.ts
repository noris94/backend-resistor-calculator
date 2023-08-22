import { RequestHandler } from "express";
import { getBandColorsFromDB } from '../services/dbService';
import { IBandColors } from "../interfaces/IBandColors";
import { OhmValueCalculator } from '../classes/OhmValueCalculator';

export const calculateOhms: RequestHandler = async (req, res) => {
    const {
        bandAColor,
        bandBColor,
        bandCColor,
        bandDColor
    } = req.body;
    const bandColors: IBandColors = await getBandColorsFromDB();
    const calculator = new OhmValueCalculator(bandColors);
    const ohms = calculator.calculateOhmValue(bandAColor, bandBColor, bandCColor, bandDColor);
    res.json({ ohms })
}

export const getBandColors: RequestHandler = async (req, res) => {
    const bandColors: IBandColors = await getBandColorsFromDB();
    res.json(bandColors);
}