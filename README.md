# Resistor Calculator Backend

This is the corresponding project to calculate the resistance values of 4 band resistors according to the instructions received.

It implements the provided interface and makes the calculations following the instructions given.

The band color values are retrieved from a database. In this case I used Sqlite for simplicity, and Prisma. It has configured migrations, so you only need to execute some commands to create and populate the database. Instructions for this are explained in this file after.

Also it implements the unit test file and configuration to test the implementation of the interface required by the instructions. I used Jest for the unit testing.

## Instalation and configuration

1. Install dependencies by running this command in terminal
   ```
   npm install
   ```
2. Run the following command in order to generate the sqlite database file.

   ```
   npx prisma migrate dev --name "init"
   ```

   By this command Prisma will create the database based on the schema declared in ./prisma/schema.prisma. Also it will create Prisma Client JS with the schema provided and populate the data by executing the script located at ./src/scripts/seed.ts.

## Usage

Now we are ready to use the application.
Run the following command:

    npm run dev

Now we can test the two endpoints of out application using _Postman_ or another preferred client:

1. http://localhost:3000/get-band-colors (GET)

2. http://localhost:3000/calculate-ohms (POST)

   This endpoint sends the following body structure:

   ```
       {
           "bandAColor":"black",
           "bandBColor":"blue",
           "bandCColor":"black",
           "bandDColor":"gold"
       }
   ```

## Unit Testing

To test the functionality of ohm calculator inherit from the interface provided we have a test file in folder `test`. There we can find some test cases.

In order to run the tests, we can run the following command:

```
    npm run test
```
