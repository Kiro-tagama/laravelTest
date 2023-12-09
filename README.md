# Teste Laravel

Criei o back com php - laravel e o front end com React

## Back-end
feito em Laravel uma api rest

os arquivos de banco de dados já estão no arquivo

para iniciar o backend entre no folder
```
  cd backend
```

Crie um arquivo .env ou simplemeste renomeie o .env.example para só .env e configure os seguintes dados de acordo com tua database
```
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=teste_laravel
DB_USERNAME=postgres
DB_PASSWORD=123456
```
Caso a base de dados n exista creia `CREATE DATABASE teste_laravel;`

em seguida execute
```
  composer i
  php artisan serve
```

use o seed para adicionar dados moka no db
```
php artisan db:seed
```

usuario admin
  email: admin1234@email.com
  senha: admin1234

crie outros usuarios sem poder de admin no tela de cadastro do front

## Front-end
agora abra outro terminal para acessar o front end 

no front foi usado
 - picocss (uma liby de estilo css com um padrão simples para criações rapidas)
 - react-router-dom
 - axios

assim criei um layout simples com poucas bibliotecas

para iniciar o front entre no folder
```
  cd frontend
```
execute
```
  npm i 
  npm run dev
```