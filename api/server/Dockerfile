FROM node:16.13.1

WORKDIR /server

COPY . .

RUN yarn install

COPY . .

EXPOSE 8000

CMD ["yarn", "start"]