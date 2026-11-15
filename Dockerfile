# Stage 1: Build the React application
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and build for /me/
COPY . .
ENV VITE_BASE_PATH=/me/
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets to both root and /me directly from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/dist /usr/share/nginx/html/me

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose ports 80 and 3000
EXPOSE 80 3000

CMD ["nginx", "-g", "daemon off;"]
