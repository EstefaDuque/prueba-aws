
FROM node:alpine as nodeAlias

WORKDIR /usr/src/prueba-aws

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM mesosphere/aws-cli

COPY --from=nodeAlias /usr/src/prueba-aws .

CMD ["s3" ,"sync" ,"./", "s3://estefaduque-webapp"]
