Description
=======

How to build image
---

docker build -t [containername]:v0.0.1 .

How to run container
---

docker run -d -p:3000:3000 [imageid]

How to connect in MongoDB and create a request
---
Username: dentu
Password: qwerty123
docker exec -it [image_name] [connect_PATH] (Connect_PATH = mongosh "mongodb+srv://cluster0.pq8xrgm.mongodb.net/" --apiVersion 1 --username [Username])
After you should enter Password 

How to stop container
---
docker stop [container_name]

How to start container 
---
docker start [container_name]