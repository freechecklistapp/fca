# Use nginx as the base image
FROM nginx:alpine

# Install git
RUN apk update && apk add git

# Clone your GitHub repository
RUN git clone https://github.com/freechecklistapp/fca /tmp/repository

# Copy your Firebase service worker script to the nginx document root
RUN cp /tmp/repository/firebase-messaging-sw.js /usr/share/nginx/html/

# Remove temporary directory
RUN rm -rf /tmp/repository

# Expose port 80
EXPOSE 80

# Command to start nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]
