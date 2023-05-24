# FROM node:alpine
# WORKDIR /app
# COPY ./client/ .
# RUN npm install
# CMD ["npm", "run", "build"]


# Set image
FROM node:alpine

# Set continer work directory
WORKDIR /app

# copy project files to the container
COPY ./client/ .

# Install dependencies
RUN npm install

# build app
RUN npm run build

# Install PM2 and serve globally
RUN npm install pm2 -g
RUN npm install serve -g

# Expose port 5173 for node
EXPOSE 5173

# Serve node app
CMD ["pm2", "start", "npx", '--name="myportfolio"', "--", "serve", "-s", "dist", "-p", "5173"]