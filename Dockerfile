FROM node:20-alpine
WORKDIR /src
COPY . .
RUN apk add --no-cache bash
CMD ["bash"]