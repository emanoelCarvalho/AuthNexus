FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build  # Ensure this step compiles the necessary files into /dist

CMD ["npm", "start"]  # Or however you start the application
