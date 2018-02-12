FROM selenium/standalone-chrome:latest

USER root

RUN apt update

RUN apt install curl -y

RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

RUN sudo apt install -y nodejs

ADD dist /dist

ADD pages /pages

ADD tests /tests

COPY globals.js /

COPY html-reporter.js /

COPY nightwatch.json /

COPY package.json /

RUN cd /

RUN npm i


