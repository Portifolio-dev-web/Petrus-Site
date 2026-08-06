FROM node:20-alpine AS development-dependencies-env
# 1. Define o diretório de trabalho
WORKDIR /app
# 2. Copia os arquivos de dependência primeiro
COPY package*.json ./
# 3. Instala as dependências
RUN npm install
# 4. Copia o restante do código
COPY . .

FROM node:20-alpine AS production-dependencies-env
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

FROM node:20-alpine AS build-env
WORKDIR /app
COPY . .
COPY --from=development-dependencies-env /app/node_modules ./node_modules
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
COPY --from=production-dependencies-env /app/node_modules ./node_modules
COPY --from=build-env /app/build ./build
CMD ["npm", "run", "start"]