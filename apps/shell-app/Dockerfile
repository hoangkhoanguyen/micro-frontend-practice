# # Stage 1: Build
# FROM node:20-alpine AS builder

# WORKDIR /app

# # Copy pnpm files
# COPY package.json ./

# # Install deps (dùng pnpm)
# RUN npm install -g pnpm && pnpm install

# # Copy toàn bộ source
# COPY . .

# # Build app
# RUN pnpm build

# # Stage 2: Serve
# FROM node:20-alpine

# WORKDIR /app

# # Cài static server (vd: serve)
# RUN npm install -g serve

# # Copy file build từ stage 1
# COPY --from=builder /app/dist ./dist

# # Mở port (ví dụ 4173 nếu dùng Vite preview)
# EXPOSE 4175

# # Chạy server
# CMD ["serve", "-s", "dist", "-l", "4175"]

# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json ./

# COPY ../../packages/shared-types/modules.d.ts ./src/types/shared-modules.d.ts

RUN npm install -g pnpm
RUN pnpm install

COPY . .
RUN pnpm build

# Stage 2: Serve with NGINX
FROM nginx:alpine AS production

# Copy static build từ builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy cấu hình NGINX (mặc định sẽ override default)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
