import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBandColorsFromDB = async () => {
    const bandColorRows = await prisma.colorBand.findMany();
    const tolerances: { [key: string]: number } = {};
    const firstTwoDigitsValues: { [key: string]: number } = {};
    const multiplierPowers: { [key: string]: number } = {};
    bandColorRows.forEach(row => {
        if (row.tolerance !== null) tolerances[row.color] = row.tolerance;
        if (row.firstTwoDigitsValue !== null) firstTwoDigitsValues[row.color] = row.firstTwoDigitsValue;
        multiplierPowers[row.color] = row.multiplierPower;
    });
    return { firstTwoDigitsValues, tolerances, multiplierPowers };
}
