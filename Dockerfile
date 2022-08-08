FROM node:latest
WORKDIR /blog-portfolio-server/app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build
EXPOSE 1990
CMD ["node", "dist/index.js"]