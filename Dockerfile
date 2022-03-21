FROM node:12-alpine

WORKDIR /wcdevs_front

COPY . .
RUN yarn
RUN yarn build

CMD ["yarn", "start"]
