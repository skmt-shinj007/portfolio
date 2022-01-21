FROM node:17-slim

RUN apt autoremove && \
    apt-get update && \
    apt-get upgrade

RUN apt-get install -y \
    vim \
    git \
    xdg-utils

WORKDIR /var/www/app
