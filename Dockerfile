FROM node:14.17.3 as build

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN yarn install

COPY . .

RUN yarn build
FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./nginx/nginx.key /etc/nginx/certs/nginx.key

COPY ./nginx/nginx-certificate.crt /etc/nginx/certs/nginx-certificate.crt

COPY --from=build /app/build /usr/share/nginx/html
