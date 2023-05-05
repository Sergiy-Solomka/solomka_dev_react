# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy both frontend and server folders
COPY frontend/ ./frontend/
COPY server/ ./server/

# Install dependencies
RUN npm install --prefix ./server
RUN npm install --prefix ./frontend
RUN npm run build --prefix ./frontend

# Expose port 80
EXPOSE 80

# Start the server
CMD ["node", "server/server.js"]
