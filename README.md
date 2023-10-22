## Learning Docker

### Topics Covered

1. Understanding Images v/s Containers

1. Running Ubuntu Image in Container

1. Multiple Containers

1. Port Mappings

1. Environment Variables

1. Dockerization of Node.js Application

   1. Dockerfile

   2. Caching Layers

   3. Publishing to Hub

1. Docker Compose

   1. Services

   2. Port Mapping

   3. Env Variables

### Part 2

1. Docker Networking

   1. Bridge

   2. Host

2. Volume Mounting

3. Efficient Caching in Layers

4. Docker Multi-Stage Builds

<br>

### Some Basic Docker Commands :

1. List all active containers:

   `docker container ls`

1. List all active and inactive containers:

   `docker container -a`

1. Start a container:

   `docker start container_name`

1. Stop a container:

   `docker stop container_name`

1. List directories inside a container and exit:

   `docker exec container_name ls`

1. Access a container's shell interactively (without exiting):

   `docker exec -it container_name bash`

1. List all locally available Docker images:

   `docker images` or `docker image ls`

1. Run a Docker container interactively, expose a specific port, and set environment variables:

   `docker run -it -p 1025:1025 -e key=val mailhog/mailhog`

1. Build a Docker image from a specified directory and assign a name:

   `docker build -t image_name directory_path`

   Example:

   > docker build -t my_app .

1. Log in to your Docker Hub (or other registry) account:

   `docker login`

1. Create and start containers

   `docker compose up <--attach or --detach >` & `docker compose down`

#### Docker Networking

1. Docker Networking

   - Host : uses Host machines network

     `docker run -it --name my_container --network=Host Image_Name`

   - Bridge : Establish Bridge between Host machine and docker

     `docker run -it --name my_container --network=Bridge Image_Name`

   - none : No internet

     `docker run -it --name my_container --network=none Image_Name`

1. Create Custom Docker Network

   `docker network create -d bridge mynet`

   - containers which uses same network can communicate with each other

1. use `docker network ls` to List down all available networks,

1. use `docker network inspect <network_name>` to see which cotainers are using the same network.

#### Volume Mapping

1.  to Create volume :

    `docker run -it -v <host_file_path>:<container_file_path>`

    for example :

    `docker run -it -v /Users/HP/Desktop/test-folder:/home/test ubuntu`
