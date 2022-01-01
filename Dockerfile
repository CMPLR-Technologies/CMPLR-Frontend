FROM node:14.17.3 as build

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN yarn install

COPY . .

RUN yarn build

RUN yarn run test

FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html
