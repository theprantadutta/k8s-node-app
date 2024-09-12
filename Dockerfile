# Use the official Node.js image
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the app on port 3000
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
