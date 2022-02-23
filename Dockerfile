FROM node:12-alpine

WORKDIR /wcdevs_front

COPY package.json .
RUN yarn
RUN yarn build

COPY . .

CMD ["yarn", "start"]
