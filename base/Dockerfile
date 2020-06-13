FROM node:12.13-alpine as structure

RUN npm install -g @angular/cli@9.0.7

WORKDIR /usr/share/hms

COPY package*.json ./

RUN npm install

COPY . .

RUN ng build --prod --base-href /hms/

FROM nginx:1.19-alpine as prod

COPY --from=structure /usr/share/hms/dist/base /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
