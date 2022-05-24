FROM node:16.13.1

WORKDIR /server

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 8000

CMD ["yarn", "start"]