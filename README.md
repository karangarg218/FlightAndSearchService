# welcome to flight service

## Project Setup
- clone the project on your local   
- execute `npm install` on the same path as your root project
- create a new .env file in the root directory and add the following variables
    - `PORT=3000`
- Inside the `src/config` folder create a new `config.json` file and then add the
following code
```
 {
  "development": {
    "username": "<YOUR_DB_LOGIN_HERE>",
    "password": "<YOUR_DB_PASSWORD_HERE>",
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- After adding all of these go to the src folder in the terminal and execute
`npx sequelize db:create`

- Now run the migration (current working directory must be Src)
`npx sequelize db:migrate`

- Run the sedder files(current working directory must be Src)
`npx sequelize db:seed:all`

## Database Design
    - Airplane table
    - Flight Table
    - Airport
    - City

    - A flight belongs to an airplane but one airplane can be used in multiple flights
    - A city has many airports but one airport belongs to a city
    - One airport can have many flights ,but a flight belongs to one airport
     



## Table

### City -> id ,name created_at ,updated_at
### Airport ->id,name,address,city_id,created_at,updated_at
    Relationship -> City has many airport and Airport belongs to a City(one to many)