# running
FROM node:14.16.1

WORKDIR /code

COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json

RUN npm install 

COPY . /code

CMD ["node","/Users/nishantpradhan/code/interviewtests/untitled_sublime.js"]