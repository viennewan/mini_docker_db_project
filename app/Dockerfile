# Pull base image.
FROM ubuntu:latest

# Install Node.js
RUN apt-get update && apt-get install -y apt-transport-https
RUN apt-get install --yes curl
RUN apt-get install --yes sudo
RUN curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 8081

CMD ["npm", "start"]

