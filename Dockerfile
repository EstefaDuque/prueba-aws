
FROM node:alpine as node

WORKDIR /usr/src/estefaduque

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM mesosphere/aws-cli

COPY --from=node /usr/src/estefaduque .

CMD ["s3" ,"sync" ,"./", "s3://estefaduque-webapp"]
