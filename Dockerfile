# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Accept build argument for STRAPI_URL with a default value
ARG STRAPI_URL=https://strapi.aniss.dev

# Set STRAPI_URL as an environment variable
ENV STRAPI_URL=${STRAPI_URL}

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --production=false

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Remove development dependencies
RUN yarn install --production --ignore-scripts --prefer-offline

# Stage 2: Create the production image
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Set STRAPI_URL as an environment variable
ENV STRAPI_URL=${STRAPI_URL} \
    NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

# Copy package.json and yarn.lock
COPY --from=builder /app/package.json /app/yarn.lock ./

# Copy only necessary files from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
