# Technical Test - SkoolBag

## Back-End Service

#### Running service on Locally

git clone https://github.com/binaraGoonawardana/SkoolBagTechnicalTest.git

cd SkoolBagTechnicalTest/service-sklbgtest

npm install

cp .env.example .env

npm start

Service will be serve on 3030 port. Go to http://localhost:3030

#### Running service on Docker Container

git clone https://github.com/binaraGoonawardana/SkoolBagTechnicalTest.git

cd SkoolBagTechnicalTest/service-sklbgtest

cp .env.example .env

docker build -t service-technicaltest:latest .

docker run --env-file=.env --name service-technicaltest-sklbg -d -p 3030:3030 service-technicaltest:latest

Service will be serve on 3030 port. Go to {protocol}://{dockerhost-ip}:3030

## Front-End App

#### Running application on Locally 

git clone https://github.com/binaraGoonawardana/SkoolBagTechnicalTest.git

cd SkoolBagTechnicalTest/app-sklbgtest

npm install

ng serve

App will be serve on 4200 port. Go to http://localhost:4200

#### Running application on Docker Container

git clone https://github.com/binaraGoonawardana/SkoolBagTechnicalTest.git

cd SkoolBagTechnicalTest/app-sklbgtest

docker build -t app-technicaltest:latest .

docker run --name app-technicaltest-sklbg -d -p 4200:80 app-technicaltest:latest

App will be serve on 4200 port. Go to {protocol}://{dockerhost-ip}:4200