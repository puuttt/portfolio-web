# Tahap 1: Install Dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./ 
RUN npm ci

# Tahap 2: Build Aplikasi
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Ini akan membuat folder .next/standalone
RUN npm run build

# Tahap 3: Runner (Image Akhir)
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

# Buat user non-root demi keamanan
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy file hasil build standalone
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]