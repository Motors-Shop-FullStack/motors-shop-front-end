FROM node:16.15.1

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN yarn install

ENTRYPOINT ["/entrypoint.sh"]

CMD ["yarn", "dev"]