# My template api rest TypeScript with TypeORM

# Configuration

## .env file
create an .env file in the project's root folder and place the following environment variables

### SERVER_PORT (required)
tells which port the server will run on.

### DB_NAME (required)
indicates the name of the database.

### DB (required)
indicates the type of the database.

### DB_USERNAME (required)
indicates the database authentication username

### DB_PASSWORD (required)
indicates the database authentication password

# ORMconfig
create an ormconfig.json file at the root of the project and place the following settings

``` json

{
   "type": "<type_database>",
   "host": "<host_database>",
   "port": 5432,
   "username": "<username_from_access_database>",
   "password": "<password_from_access_database>",
   "database": "<name_database>",
   "entities": [
      "src/entity/*.ts"
   ],
   "migrations": [
      "src/migration/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration"
   }
}

```