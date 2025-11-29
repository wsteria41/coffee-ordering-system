FROM node:18-alpine

WORKDIR /app

# Only copy package files first
COPY package*.json ./

RUN npm install

# Copy source code
COPY . .

RUN npx prisma generate

# Build TypeScript
RUN npm run build

# Start server
CMD ["node", "dist/server.js"]

EXPOSE 3000
