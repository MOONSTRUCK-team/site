FROM node:14 AS builder

ARG PORT

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm run build

RUN echo $PORT

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY --from=builder /usr/src/app/public .
COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
