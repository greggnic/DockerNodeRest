# Docker Node Rest

This project is a learning experiment with docker. I'm starting with the most basic docker methods and scaling out to a clustered environment with load-balancing and service discovery.

Follow my journey by checking out these tags:
  - Basic node server running in a docker container
    - ```git checkout DockerNode```
  - Using docker-compose for configuration
    - ```git checkout DockerComposeNode```
  - Add a mongodb database
    - ```git checkout DockerComposeMongoose```
  - Add configuration through environment variables
    - ```git checkout DockerComposeEnvConfig```
  - Add a load balancer (nginx)
    - ```git checkout DockerComposeLB```
  - Add in service discovery
    - ```git checkout DockerComposeSD```
 
To start up the finished version, simply run 
```
docker-compose up
```

This will start up the mongo db server, node server, nginx load balancer, consul discovery service, and registrator to register your services with consul.

You can automatically scale using:
```
docker-compose scale node-rest=5
```

And de-scale:
```
docker stop <container_id>
```