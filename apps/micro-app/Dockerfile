# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy pnpm files
COPY package.json ./

# Install deps (dùng pnpm)
RUN npm install -g pnpm && pnpm install

# Copy toàn bộ source
COPY . .

# Build app
RUN pnpm build

# Stage 2: Serve
FROM node:20-alpine

WORKDIR /app

# Cài static server (vd: serve)
RUN npm install -g serve

# Copy file build từ stage 1
COPY --from=builder /app/dist ./dist

# Mở port (ví dụ 4173 nếu dùng Vite preview)
EXPOSE 4173

# Chạy server
CMD ["serve", "-s", "dist", "-l", "4173", "--cors"]
