# Use nginx as the base image
FROM nginx:alpine

# Copy the service worker script to the nginx document root
COPY firebase-messaging-sw.js /usr/share/nginx/html/

# Expose port 80
EXPOSE 80
