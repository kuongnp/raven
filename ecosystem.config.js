module.exports = {
  apps : [{
    name: 'api',
    script: 'api.js',
    watch: ["api"],
    watch_delay: 1000,
    ignore_watch : ["node_modules"],
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  },
  {
    name: 'backend',
    script: 'backend.js',
    watch: ["backend"],
    watch_delay: 1000,
    ignore_watch : ["node_modules","backend/views/assets/**/*"],
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  },
  {
    name: 'frontend',
    script: 'frontend.js',
    watch: ["frontend"],
    watch_delay: 1000,
    ignore_watch : ["node_modules"],
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
