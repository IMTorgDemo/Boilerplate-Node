# Node Boilerplate

This is a MEVN boilerplate with the following features:

* Node
* MongoDb
* Vue with Handlebars
* Bootstrap styling
* Mocha tests
* VSCode config
* Docker deploy


### Node development

Ensure Node is current

```
$ nvm ls-remote
$ nvm install 8.9.4
$ node -v
```

Seed the database with test data `$ node database/dbSeeder.js`

You can then build and run the Docker image

```
$ docker build -t mevn-boiler .
$ docker images
$ docker run -it --rm --name mevn-app mevn-boiler
$ docker ps -a
```

or just use `$ npm run start-local`

`??? DOCKER COMPOSE ???`[ref](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-14-04)


### Docker deploy

- [ref docker image](https://github.com/nodejs/docker-node)
- [best practices](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md)




### Mongo

[ref mongo image](https://hub.docker.com/r/library/mongo/)

```
docker pull mongo
docker run --name data_store -d mongo
```

Get the ipaddress using: `docker inspect data_store | grep "IPAddress" `

Take a look around, if necessary: `docker exec -it data_store mongo`




### Node - Mongo Db-Connection / Image-Link
[reference for various docker configurations](http://www.ifdattic.com/how-to-mongodb-nodejs-docker/)
create a container which has all the required data mounted and is linked to mongo container.

```
docker run --name web_app --link data_store:mongo -d node_app
docker run -it --name node -v "$(pwd)":/data --link mongo:mongo -w /data -p 8082:8082 node bash
```

```
// Ways to connect to MongoDb
// Same Machine
con = 'mongodb://localhost:27017/users'

// Mongo in docker, Node on machine
con = 'mongodb://<containerIPAddress>:27017/users'

// Both Mongo and Node in separate docker containers
con = 'mongodb://<containerName>:27017/users'

```




### Useful Docker commands

```
$ docker system prune

```






***

<p align="center"><b> Want to discuss software?</b><br>Send me a message <a href="mailto:information@mgmt-tech.org?Subject=Open%20Software" target="_top"></a> information@mgmt-tech.org</p>

***


## License

MIT © [Information Management Technologies, LLC](http://mgmt-tech.org)
