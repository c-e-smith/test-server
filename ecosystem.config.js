module.exports = {
  apps: [{
    name: 'test-server',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-18-219-250-56.us-east-2.compute.amazonaws.com',
      key: '/home/ec2-user/data/silver_isles.pem',
      ref: 'origin/master',
      repo: 'git@github.com:c-e-smith/test-server.git',
      path: '/home/ec2-user/test-server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}


