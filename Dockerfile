FROM node:20-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g vite
COPY . /app
RUN vite build --mode production

FROM nginx:1.25-alpine as prod
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE  80
CMD ["nginx", "-g", "daemon off;"]
