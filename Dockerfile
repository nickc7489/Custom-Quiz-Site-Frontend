FROM node:15.13-alpine
WORKDIR /quiz-creator
RUN CI=true
COPY . .
RUN npm run build