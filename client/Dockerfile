# base image
FROM node:14.16.0-alpine

# set working directory
WORKDIR /usr/src/client

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/client/node_modules/.bin:$PATH

# install and cache app dependencies
COPY ./package.json /usr/src/client/package.json
RUN npm install
RUN npm install @vue/cli@4.5.11 -g

# start app
CMD ["npm", "run", "serve"]