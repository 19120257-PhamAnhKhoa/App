FROM node:latest as build
WORKDIR /APP
COPY . /APP
RUN npm install && npm run build
FROM nginx:latest
COPY --from=build /APP/build usr/share/nginx/html