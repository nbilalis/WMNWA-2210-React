# Dockerizing a Node.js web app | Node.js - https://tmpl.at/3dCqtQv

FROM node:17-alpine

# Create app directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . ./

ENV NODE_ENV production
ENV PORT 80
ENV ATLAS_URI SET_YOUR_ATLAS_API_HERE

EXPOSE 80

CMD [ "ts-node", "src/index.ts" ]

# Remove previous build & container
# docker image rm react-past-papers-server --force
# docker rm react-past-papers-server-container --force

# Build image
# docker build -t react-past-papers-server .

# Run the container and remove it after it exits
# docker run -it -d --name react-past-papers-server-container --rm -p 1338:80 react-past-papers-server

# See running processes
# docker container top react-past-papers-server-container
