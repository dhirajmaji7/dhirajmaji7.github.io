FROM node:20.11-alpine3.18

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

RUN apk add --no-cache git openssh

EXPOSE 3000

# CMD ["npm", "start"]
CMD ["/bin/bash"]