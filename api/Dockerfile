FROM node:12.13-alpine

ARG APP_NAME

ARG APP_PORT

ENV APP_NAME=$APP_NAME

ENV APP_PORT=$APP_PORT

RUN apk add --no-cache tini

WORKDIR /usr/share/api

COPY server.js server.js

EXPOSE 8081

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "server.js"]
