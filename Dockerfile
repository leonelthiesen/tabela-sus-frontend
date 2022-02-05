FROM node:lts-alpine As builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# ---

FROM nginx:stable-alpine As frontend

COPY --from=builder /usr/src/app/dist/app/ /etc/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

# ADD fullchain.pem /etc/letsencrypt/live/tabelasus.com.br/

# ADD privkey.pem /etc/letsencrypt/live/tabelasus.com.br/

EXPOSE 80

ENTRYPOINT ["/usr/sbin/nginx"]

CMD ["-g", "daemon off;"]
