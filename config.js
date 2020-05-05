'use strict';

module.exports = {
  frontend: {
    host: '0.0.0.0',
    port: 8080,
    labels: ['frontend']
  },
  api: {
    host: '0.0.0.0',
    port:8081,
    labels:['api']
  },
  backend: {
    host: '0.0.0.0',
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