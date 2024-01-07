FROM node:20-alpine as build

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install
RUN npm install -g vite
RUN npm install -g serve

COPY . /app
RUN vite build --mode production
EXPOSE 3000

CMD [ "serve", "-s", "dist", "-l", "3000" ]
