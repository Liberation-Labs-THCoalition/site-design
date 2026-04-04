# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy source
COPY . .

# Build the site
RUN npm run build

# Stage 2: Production with Caddy
FROM caddy:2-alpine AS production

# Copy built site to Caddy's serve directory
COPY --from=build /app/dist /srv

# Copy Caddyfile for standalone use (overridden by docker-compose)
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80 443

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
