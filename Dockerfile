# Use the official Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install

# Build the Next.js application for production
RUN npm run build

# Expose the port that the Next.js app is running on
EXPOSE 3000

# Run the Next.js application in production mode
CMD ["npm", "start"]