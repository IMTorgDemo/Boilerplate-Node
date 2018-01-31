# node base image, node:<version>
FROM node:latest

MAINTAINER Jason Beach

ENV NODE_ENV=development 
ENV PORT=3000

#COPY      . /var/www
#WORKDIR   /var/www

RUN npm install

# default port
EXPOSE $PORT

ENTRYPOINT ["npm","run","start-dev"]