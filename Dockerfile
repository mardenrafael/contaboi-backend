FROM node:16-alpine

WORKDIR /usr/app/


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030

RUN npm run prisma:generate


CMD [ "npm", "start" ]