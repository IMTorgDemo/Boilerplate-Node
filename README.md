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

You can then build and run the Docker image

```
$ docker build -t mevn-boiler .
$ docker run -it --rm --name mevn-app mevn-boiler
```


### Docker deploy

- [ref docker image](https://github.com/nodejs/docker-node)
- [best practices](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md)




### Mongo

[ref mongo image](https://hub.docker.com/r/library/mongo/)

```
docker pull mongo
docker run --name data_store -d mongo
```

Get the ipaddress using: `docker inspect data_store`

Take a look around, if necessary: `docker exec -it data_store mongo`




### WebApp - Mongo Link ????
[reference for various docker configurations](http://www.ifdattic.com/how-to-mongodb-nodejs-docker/)
create a container which has all the required data mounted and is linked to mongo container.

```
docker run --name web_app --link data_store:mongo -d node_app
docker run -it --name node -v "$(pwd)":/data --link mongo:mongo -w /data -p 8082:8082 node bash
```

// Ways to connect to MongoDb
// Original connect
MongoClient.connect('mongodb://localhost:27017/blog', function(err, db) {
    // ...
});
// Connect using environment variables
MongoClient.connect('mongodb://'+process.env.MONGO_PORT_27017_TCP_ADDR+':'+process.env.MONGO_PORT_27017_TCP_PORT+'/blog', function(err, db) {
    // ...
});
// Connect using hosts entry
MongoClient.connect('mongodb://mongo:27017/blog', function(err, db) {
    // ...
});

```


***

<p align="center"><b> Want to discuss software?</b><br>Send me a message <a href="mailto:information@mgmt-tech.org?Subject=Open%20Software" target="_top"></a> information@mgmt-tech.org</p>

***


## License

MIT © [Information Management Technologies, LLC](http://mgmt-tech.org)
