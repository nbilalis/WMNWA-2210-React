# Dockerizing a React App - https://tmpl.at/3IBqbrn

# pull official base image
FROM node:17-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

RUN npm install -g npm@8.3.0
RUN npm install # --silent

# add app
COPY . ./

# start app
#CMD ["npm", "run", "build"]
RUN npm run build

# production environment
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# Remove previous build & container
# docker image rm react-past-papers-client --force
# docker rm react-past-papers-client-container --force

# Build image
# docker build -t react-past-papers-client .

# Run the container and remove it after it exits
# docker run -it -d --name react-past-papers-client-container --rm -p 1337:80 react-past-papers-client
