# ---- Build Stage ----
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci --prefer-offline

# Copy source and build
COPY . .
RUN npm run build

# ---- Runtime Stage ----
FROM node:20-alpine AS runtime

WORKDIR /app

# Copy built output and server dependencies
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./

# Astro hybrid mode needs the server
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:4321/ || exit 1

CMD ["node", "./dist/server/entry.mjs"]
