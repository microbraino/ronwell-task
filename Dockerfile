FROM node:20-alpine3.20

WORKDIR /opt/app

COPY . .

RUN npm install

EXPOSE 8000

RUN chmod +x ./entrypoint.sh
CMD ["./entrypoint.sh"]
