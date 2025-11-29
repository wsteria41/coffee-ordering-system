FROM node:18-alpine

WORKDIR /app

# Copy package configs
COPY package.json package-lock.json* ./

# Install ALL deps (devDeps 포함)
RUN npm ci --include=dev

# Copy project files
COPY . .

# Install Prisma CLI globally (fix for alpine)
RUN npm install -g prisma

# Generate Prisma Client
RUN npx prisma generate

# Build TypeScript
RUN npm run build

EXPOSE 4000

CMD ["node", "dist/server.js"]
