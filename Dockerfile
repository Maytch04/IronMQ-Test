FROM iron/node

WORKDIR /app
ADD . /app

ENTRYPOINT ["node", "ironmq.js"]