FROM node:alpine

WORKDIR /app
COPY ./client/ .

RUN npm install

CMD ["npm", "run", "build"]