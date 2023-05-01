FROM node:latest

WORKDIR /app

COPY server/package*.json ./

RUN npm install

COPY server .

EXPOSE 80
CMD [ "node", "server.js" ]