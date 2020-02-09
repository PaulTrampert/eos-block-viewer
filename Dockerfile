FROM node:lts AS base

WORKDIR /app
RUN npm install -g serve

FROM node:lts AS build
WORKDIR /project
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
RUN npm run build

FROM base AS final
COPY --from=build /project/build/ /app

CMD [ "serve", "-s", "-l", "80", "/app"]