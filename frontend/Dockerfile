FROM node:20-slim AS builder
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# FIX lightningcss binary for Linux
RUN npm rebuild lightningcss --update-binary

RUN npm run build

FROM node:20-slim AS runner
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

EXPOSE 3000
CMD ["npm", "start"]
