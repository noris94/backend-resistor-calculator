// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function populateData() {
    await prisma.colorBand.create({
        data: {
            color: 'black',
            firstTwoDigitsValue: 0,
            multiplierPower: 0
        }
    });
    await prisma.colorBand.create({
        data: {
            color: 'brown',
            firstTwoDigitsValue: 1,
            multiplierPower: 1,
            tolerance: 1
        }
    });
    await prisma.colorBand.create({
        data: {
            color: 'red',
            firstTwoDigitsValue: 2,
            multiplierPower: 2,
            tolerance: 2
        }
    });
    await prisma.colorBand.create({
        data: {
            color: 'orange',
            firstTwoDigitsValue: 3,
            multiplierPower: 3
        }
    });

    await prisma.colorBand.create({
        data: {
            color: 'yellow',
            firstTwoDigitsValue: 4,
            multiplierPower: 4
        }
    });
    await prisma.colorBand.create({
        data: {
            color: 'green',
            firstTwoDigitsValue: 5,
            multiplierPower: 5
        }
    });
    await prisma.colorBand.create({
        data: {
            color: 'blue',
            firstTwoDigitsValue: 6,
            multiplierPower: 6
        }
    });
    await prisma.colorBand.create({
        data: {
            color: 'violet',
            firstTwoDigitsValue: 7,
            multiplierPower: 7
        }
    });
    await prisma.colorBand.create({
        data: {
            color: 'grey',
            firstTwoDigitsValue: 8,
            multiplierPower: 8
        }
    });
    await prisma.colorBand.create({
        data: {
            color: 'white',
            firstTwoDigitsValue: 9,
            multiplierPower: 9
        }
    });
    await prisma.colorBand.create({
        data: {
            color: 'gold',
            multiplierPower: -1,
            tolerance: 5
        }
    });
    await prisma.colorBand.create({
        data: {
            color: 'silver',
            multiplierPower: -2,
            tolerance: 10
        }
    });
}

// execute the main function
populateData()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });
