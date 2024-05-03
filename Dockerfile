FROM node:20-alpine
RUN apk add --no-cache bash
RUN apk add --no-cache git
WORKDIR /src
COPY . .
CMD ["/src/testNpmLifecycles.sh"]