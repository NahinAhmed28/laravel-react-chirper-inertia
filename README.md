# Welcome to the Project Documentation

- [Technology Requirements](#Technology-Requirements)
- [Installation](#installation)
- [Usage](#usage)
- [File Upload Documentation](#file-upload-documentation)



## Technology Requirements


##### PHP ^8.1
##### mongoDB ^6.0
##### Node ^16+
##### React ^18.2.0
##### Laravel ^9.0

## Installation

```sh
git clone this-url
```

```sh
cd project-root
```



##### Install [composer](https://getcomposer.org/) dependencies of this project by running

```sh
composer install
```

##### Copy `.env-example` to `.env` and configure your database and other connection.

##### Run this two command also

```shell
php artisan key:generate
php artisan storage:link 
```

##### set up your .env file 

##### Run this command for migration and seeder

```shell
php artisan migrate:fresh --seed
```

##### Run this command to clear all type of cache

```shell
php artisan cache:clear
```

```shell
php artisan optimize:clear
```
##### Install node dependencies of this project by running

```sh
npm install 
npm run dev
npm run build
```




##### Run this command to start application

```shell
php artisan serve
```

## Usage

Go to the link  `http://127.0.0.1:8000/register` for registration and log in the system using registered credentials .

## License
```
The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
