FROM node:16.15.1

WORKDIR /motors-shop-front-end

COPY package*.json ./

COPY ./ ./

RUN yarn

CMD ["yarn", "dev"]