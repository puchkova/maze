FROM node:10

WORKDIR /app

COPY package.json src/app

RUN npm install

COPY . /app

CMD node src/app.js

EXPOSE 8080
