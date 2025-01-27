FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["NODE_ENV=production", "node", "src/server/main.js"]
EXPOSE 8080
