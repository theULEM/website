# ULEM.org based on [Bedrock](https://roots.io/bedrock/)

## Setup

1. `git clone git@github.com:theULEM/website.git`
2. `cp .env.example .env`
3. `docker-compose up -d`
4. `docker-compose exec mysql bash -c "mysql -u root -pulem < docker-entrypoint-initdb.d/createdb.sql" #create the proper database`
5. `docker-compose exec workspace composer install #installs WP dependencies`
6. `docker-compose exec workspace dep db:pull live #pulls in DB data` (
   See [here for more info](https://github.com/authwit/deployer-wp-recipes))
7. `docker-compose exec workspace dep uploads:pull live # pulls in media ` (
   See [here for more info](https://github.com/authwit/deployer-wp-recipes))
8. Add `127.0.0.1 http://ulem.local` to your hosts file.

## Links

- WP Admin
    - http://ulem.local/wp/wp-admin
    - username: \<your username\>
    - password: \<your password\>
- MailHog
    - http://localhost:8025
    - SMTP:
        - host: localhost
        - PORT: 1025
