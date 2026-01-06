# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js application (generates static export in 'docs' folder)
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine AS runner

# Copy the static export from the builder stage
# distDir is configured to 'docs' in next.config.mjs
COPY --from=builder /app/docs /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
