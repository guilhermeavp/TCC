FROM node:20-alpine

RUN mkdir /src

WORKDIR /src

ADD ./package.json /src/package.json

ADD ./.env /src/.env

COPY ./dist /src/dist/

COPY ./tsconfig.json /src/tsconfig.json

RUN npm install

CMD npm start