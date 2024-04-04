# Stage 1: Build Angular application
FROM node:14 as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build -- --prod

# Stage 2: Serve the Angular application with Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
