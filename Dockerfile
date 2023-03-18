FROM node:14.16.0-alpine3.13
RUN addgroup user && adduser -S -G user user
USER user
WORKDIR /app
RUN mkdir data 
#making a directory inside it associates the ownership of the directory to the user
COPY package*.json /
RUN pnpm i
COPY . .
EXPOSE 3000
ENTRYPOINT [ "pnpm dev" ]