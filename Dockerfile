FROM node:14.16.0-alpine3.13
RUN addgroup user && adduser -S -G user user
USER user
WORKDIR /app
COPY package*.json /
RUN pnpm i
COPY . .
EXPOSE 3000
ENTRYPOINT [ "pnpm dev" ]