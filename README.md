# GET STARTED

``` 
npm i
```
or
``` 
npm i react-router-dom react-hot-toast axios react-hook-form react-scroll
npm i react-icons --save
```
and
``` 
npm run dev -- --host
```

---
# DOCKER (optional)
* Load docker file for the frontend:
    ``` 
    docker build -t portfolio_frontend_img -f Dockerfile . 
    ```
* Load docker file for the backend:
    ``` 
    docker build -t portfolio_backend_img -f Dockerfile . 
    ```
NOTE: Each command needs to be executed into the directory where is the file Dockerfile
* By deploy the project, only run the docker compose file with the next command:
    ``` 
    docker-compose up --build 
    ```
