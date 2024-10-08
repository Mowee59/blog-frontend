# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

ARG STRAPI_URL=https://strapi.aniss.dev
ENV STRAPI_URL=${STRAPI_URL}

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

COPY . .
RUN yarn build

# Stage 2: Create the production image
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV STRAPI_URL=${STRAPI_URL}

COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
