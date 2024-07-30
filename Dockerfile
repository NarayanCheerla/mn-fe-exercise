# Use the official Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

#Install global dependencies
RUN npm install -g lerna

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Disable nextjs telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Build the Next.js application for production
RUN lerna run build

# Expose the port that the Next.js app is running on
EXPOSE 3000

# Run the Next.js application in production mode
CMD ["npm", "start"]