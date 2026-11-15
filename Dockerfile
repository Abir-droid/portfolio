# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve on port 3000 (avoids conflict with Traefik on 80)
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Also copy into /usr/share/nginx/html/me so both / and /me exist physically on disk
RUN mkdir -p /usr/share/nginx/html/me && cp -r /usr/share/nginx/html/assets /usr/share/nginx/html/me/ 2>/dev/null || true && cp /usr/share/nginx/html/*.* /usr/share/nginx/html/me/ 2>/dev/null || true
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
