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

