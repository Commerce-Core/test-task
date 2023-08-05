## PageRank List App (React/Laravel/Inertia/Tailwind)

This is a simple app that allows you to see a list of web domain ranks. Ranks is fetched form RankPage API. Yuo can search by domain name.

Local development setup:

1. Clone the repo

2. Install Composer dependencies

```bash
composer install
```

3. Create a copy of your .env file

```bash

cp .env.example .env
```

Don't forget to add OpenPageRank API key to .env file ```PAGE_RANK_API_KEY``` variable (required).
You can get it from https://www.domcop.com/openpagerank/what-is-openpagerank . It's free.

Also you can change JSON data url by setting ```PAGE_RANK_JSON_URL``` variable in .env file (not required). 
If not set, it will use the default url.

And finally you can change OpenPageRank API url by setting ```PAGE_RANK_API_URL``` variable in .env file (not required). 
If not set, it will use the default url.


4. Generate an app encryption key

```bash
php artisan key:generate
```

5. Start Sail containers

```bash
./vendor/bin/sail up
```

6. Migrate the database

```bash
./vendor/bin/sail artisan migrate
```

7. Start job queue

```bash
./vendor/bin/sail artisan queue:work redis
```

8. Fetch ranks from RankPage API

```bash
./vendor/bin/sail artisan page-rank:fetch
```

9. Install NPM dependencies

```bash
./vendor/bin/sail npm install
```

10. Build assets

```bash
./vendor/bin/sail npm run build
```

11. Visit http://localhost:8080 in your browser