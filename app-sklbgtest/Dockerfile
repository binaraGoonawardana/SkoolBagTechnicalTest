FROM node:12.18.1-alpine as build

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

# Runs the build definition stated on package.json 
RUN npm run build
# If you are building your code for production
# RUN npm run build --production

FROM nginx:1.19.0-alpine

# Copy the compiled angular app from build to nginx container
COPY --from=build /usr/src/app/dist/app-sklbgtest /usr/share/nginx/html
