FROM node:20.12-alpine

WORKDIR /app

COPY . ./

RUN npm install

CMD [ "npm", "start" ]