FROM node:18-alpine as build

WORKDIR /app

# Copy package.json and lock file first for caching
COPY package.json package-lock.json ./

RUN npm install

# Copy the rest of the app, including public and src
COPY public ./public
COPY src ./src

# Build the React app
RUN npm run build

# Production stage
FROM nginx:1.21.6-alpine

COPY src/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
