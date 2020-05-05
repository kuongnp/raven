'use strict';

module.exports = {
  frontend: {
    host: process.env.IP,
    port: 8080,
    labels: ['frontend']
  },
  api: {
    host: process.env.IP,
    port:8081,
    labels:['api']
  },
  backend: {
    host: process.env.IP,
    port: 8082,
    labels: ['backend']
  },
  database: {
  	host: process.env.IP,
    port: 27017,
    db: 'cms',
    username: '',
    password: '',
    url : 'mongodb://<user>:<password>@<url>',
    labels: ['db']
  }
};