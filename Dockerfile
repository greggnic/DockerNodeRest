FROM node:4-onbuild

ADD package.json package.json
RUN npm install
ADD . .

EXPOSE 80

CMD ["node","app.js"]
#FROM    centos:centos6

# Enable Extra Packages for Enterprise Linux (EPEL) for CentOS
#RUN     yum install -y epel-release
# Install Node.js and npm
#RUN     yum install -y nodejs npm

# Install app dependencies
#COPY package.json /src/package.json
#RUN cd /src; npm install --production

# Bundle app source
#COPY . /src

#EXPOSE  8080
#CMD ["node", "/src/app.js"]