FROM node:current-alpine

COPY ./app
WORKDIR /app

RUN npm install -g @angular/cli && \
    npm install  && \
    ng build && \
    apk add firefox && \
    npm run test -- --no-watch --no-progress --browsers=FirefoxHeadless
