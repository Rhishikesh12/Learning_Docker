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

   `docker images`

   ### or

   `docker image ls`

1. Run a Docker container interactively, expose a specific port, and set environment variables:

   `docker run -it -p 1025:1025 -e key=val mailhog/mailhog`

1. Build a Docker image from a specified directory and assign a name:

   `docker build -t image_name directory_path`

   ### Example:

   > docker build -t my_app .

1. Log in to your Docker Hub (or other registry) account:

   `docker login`
