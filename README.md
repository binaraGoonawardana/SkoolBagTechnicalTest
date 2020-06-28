# Technical Test - SkoolBag

## Front-End App

#### Running application on Docker Container

git clone https://github.com/binaraGoonawardana/SkoolBagTechnicalTest.git

cd SkoolBagTechnicalTest/app-sklbgtest

docker build -t skoolBag/app-technicaltest:latest .

docker run --name app-technicaltest-sklbg -d -p 4200:80 skoolBag/app-technicaltest:latest

App will be serve on 4200 port. Go to {protocol}://{dockerhost-ip}:4200

#### Running application on Locally 

git clone https://github.com/binaraGoonawardana/SkoolBagTechnicalTest.git

cd SkoolBagTechnicalTest/app-sklbgtest

npm install

ng serve

App will be serve on 4200 port. Go to http://localhost:4200

## Back-End Service

#### Running service on Docker Container

git clone https://github.com/binaraGoonawardana/SkoolBagTechnicalTest.git

cd SkoolBagTechnicalTest/service-sklbgtest