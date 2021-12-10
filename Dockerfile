FROM node:14.17.3

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN yarn install

COPY . .

CMD yarn start
