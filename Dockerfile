FROM node:latest

WORKDIR /usr/src/app

COPY server/package*.json ./

RUN npm install

COPY server .

EXPOSE 80
CMD [ "node", "server.js" ]