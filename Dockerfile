FROM node:20-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:1.25-alpine as prod
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE  80
CMD ["nginx", "-g", "daemon off;"]
