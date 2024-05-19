FROM node:20-alpine

RUN mkdir /src

WORKDIR /src

ADD ./package.json /src/package.json

ADD ./.env /src/.env

COPY ./dist /src/dist/

COPY ./tsconfig.json /src/tsconfig.json

EXPOSE 10800

RUN npm install

CMD npm start