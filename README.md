## Installation

- git clone https://github.com/KinyuaMwaniki/orders.git 
- cd orders
- composer install (if it fails run composer install --ignore-platform-reqs)
- npm install
- npm run dev
- cp .env.example .env
- php artisan key:generate
- Create db and change .env database connection to the following

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your-db-name
DB_USERNAME=your-db-username
DB_PASSWORD=your-db-password

- php artisan migrate --seed
- php artisan passport:install (Take note of the password grant client id and secret)
- In .env fill the following variables with the details above

PASSPORT_LOGIN_ENDPOINT="http://your-domain.test/oauth/token" (replace with your localhost name after you have set up your server)
PASSPORT_CLIENT_ID=4 (replace with client id above)
PASSPORT_CLIENT_SECRET=VszY3G4AN9CqSao7tFIzf2T6ecCgpDNp (replace with client secret above)

- php artisan config:clear
