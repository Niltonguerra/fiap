From node:18-slim

ENV NODE_ENV=production
ENV URL_BD=rds-fiap.saarea.us-east-1.com

WORKDIR /app

COPY package.json .

RUN npm install

RUN apt-get update && apt-get install -y nano

COPY . .

expose 3000

CMD ["node", "app.js"]
