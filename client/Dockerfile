FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

RUN npm install serve -g
EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]
#CMD ["npm", "run", "serve", "--", "-p", "5173", "--host"]
#CMD ["pm2", "start", "npx", '--name="myportfolio"', "--", "serve", "-s", "dist", "-p", "5173"]