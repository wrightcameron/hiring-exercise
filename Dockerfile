from node:14.18.2

WORKDIR /app
COPY . .

RUN npm install

CMD [ "npm", "run", "dev" ]
