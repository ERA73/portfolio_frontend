# FROM node:alpine
# WORKDIR /app
# COPY ./client/ .
# RUN npm install
# CMD ["npm", "run", "build"]

# Set image
FROM node:alpine
RUN mkdir /app
# Set continer work directory
WORKDIR /app
# Install dependencies
#RUN npm install
# copy project files to the container
COPY . .
# build app
RUN npm ci
RUN npm run build

# Install PM2 and serve globally
#RUN npm install pm2 -g
RUN npm install serve -g
# Expose port 5173 for node
EXPOSE 5173

# Serve node app
CMD ["serve", "-s", "dist", "-l", "5173"]
#CMD ["npm", "run", "serve", "--", "-p", "5173", "--host"]
#CMD ["pm2", "start", "npx", '--name="myportfolio"', "--", "serve", "-s", "dist", "-p", "5173"]
