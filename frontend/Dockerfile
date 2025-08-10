FROM node:18-alpine as build

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm run build

FROM nginx:1.21.6-alpine
COPY src/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
