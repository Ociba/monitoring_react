# Use an official Node.js runtime as the base image for building
FROM node:14-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining project files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# RUN npm install serve -g && npm run build && serve -s build

# Command to run the React app
CMD npm install serve -g && npm run build && serve -s build
