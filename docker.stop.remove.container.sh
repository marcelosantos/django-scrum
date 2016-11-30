echo 'Parando containers... ' && \
docker stop $(docker ps -a -q) && \
echo 'Removendo containers... ' && \
docker rm $(docker ps -a -q)
