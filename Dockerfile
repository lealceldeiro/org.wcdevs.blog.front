FROM node:12-alpine

WORKDIR /wcdevs_front

COPY package.json .
RUN npm install

COPY . .

CMD ["npm", "start"]
