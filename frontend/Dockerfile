# Build stage
FROM node:18 as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

# Serve stage
FROM node:18

RUN npm install -g serve

WORKDIR /app

COPY --from=build /app/build .

CMD ["serve", "-s", ".", "-l", "3000"]