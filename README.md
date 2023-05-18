# GET STARTED

``` 
npm i
```
or
``` 
npm i react-router-dom react-hot-toast axios react-hook-form
npm i react-icons --save
```
and
``` 
npm run dev -- --host
```

---
# DOCKER (optional)
By deploy the project, only run the docker compose file with the next command:
    *   ``` docker-compose up --build ```

## NOTE:
---
## 1
---
Create inside a directory the next structure:
```
project
    frontend
        ...(all project files)
    backend
        ...(all project files)
    nginx
        Dockerfile
        default.conf
    docker-compose.yaml
    .env
```
---
## 2
---
* The nginx Dockerfile content:
```
FROM nginx:1.24.0-perl

COPY ./default.conf /etc/nginx/conf.d/default.conf
```

* The default.conf file content:
```
upstream backend {
	server backend:8000;
}

server {
	listen 80;

	location /api/ {
		proxy_pass http://backend;
	}

	location /static/rest_framework/ {
		root /static/;
	}

	location / {
		root /var/www/frontend;
		try_files $uri $uri/ /index.html;
	}
}
```

* The docker-compose file content:
```
version: '3.0'

services:
backend:
    volumes:
    - static:/static
    env_file:
    - .env
    build:
    context: ./portfolio_backend
    ports:
    - "8000:8000"
frontend:
    build:
    context: ./portfolio_frontend
    volumes:
    - frontend:/app/build
mariadb:
    image: mariadb:10.6.13
    environment:
      - MYSQL_DATABASE=portfolio
      - MYSQL_USER=root
      - MYSQL_PASSWORD=admin
      - MYSQL_ROOT_PASSWORD=admin
    volumes:
      - dbdata:/var/lib/mysql
nginx:
    build:
    context: ./nginx
    volumes:
    - static:/static
    - frontend:/var/www/frontend
    ports:
    - "80:80"
    depends_on:
    - backend
    - frontend

volumes:
static:
frontend:
```

* The .env file content:
```
SECRET_KEY = your secret key
DEBUG = True 
```