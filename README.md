1. docker container ls : to list all active containers
2. docker container -a : to list all the active & not active containers
3. docker start container_name
4. docker stop container_name
5. docker exec container_name ls : it will return all the directories present inside container and exit.
6. docker exec -it container_name bash : this will not exit the container.
7. docker images / image ls - lists all images present locally
8. docker run -it -p 1025:1025 <-e key=val > mailhog/mailhog : exposes containers port to local machine, we can pass env key to the conainer
9. docker build -t <image_name><directory_path (.)>
10. docker login

Extras :

<-it> stands for interactive mode it connects local terminal to containers terminal.
#   L e a r n i n g _ D o c k e r  
 