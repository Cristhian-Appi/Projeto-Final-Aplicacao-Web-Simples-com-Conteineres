FROM node:20.13.1

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 8000

CMD ["npm", "start"]
