# Stage 1: Build the React application
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and build
COPY . .
ENV VITE_BASE_PATH=/me/
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets to root
COPY --from=builder /app/dist /usr/share/nginx/html

# Also copy assets directly into /me directory so both /me/... and /... physical paths resolve immediately
RUN mkdir -p /usr/share/nginx/html/me && cp -r /usr/share/nginx/html/* /usr/share/nginx/html/me/

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose both 80 and 3000 to prevent port mismatch in Coolify
EXPOSE 80 3000

CMD ["nginx", "-g", "daemon off;"]
