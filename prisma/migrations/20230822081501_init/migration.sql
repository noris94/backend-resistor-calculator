-- CreateTable
CREATE TABLE "ColorBand" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "color" TEXT NOT NULL,
    "firstTwoDigitsValue" INTEGER,
    "multiplierPower" INTEGER NOT NULL,
    "tolerance" INTEGER
);
