FROM node:21

WORKDIR /app

RUN npm install -g @angular/cli

EXPOSE 4200

COPY package.json . 
RUN npm install 



CMD ng serve  --host 0.0.0.0
