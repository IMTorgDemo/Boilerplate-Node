# node base image, node:<version>
FROM node:latest

MAINTAINER Jason Beach

ENV NODE_ENV=local 
ENV PORT=3456

#COPY      . /var/www
#WORKDIR   /var/www

RUN npm install

# default port
EXPOSE $PORT

ENTRYPOINT ["npm","run","start-local"]