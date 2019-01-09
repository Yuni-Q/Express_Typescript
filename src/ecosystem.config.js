module.exports = {
  apps: [{
    name: 'yun',
    script: 'src/www.ts',
    exec_mode: 'cluster',
    log_date_format: 'YYYY-MM-DD HH:mm:ss ',
    instances: 'max',
    instance_var: 'INSTANCE_ID',
    env: {
      NODE_ENV: 'development',
      NODE_CONFIG_DIR: './config/',
      NEW_RELIC_APP_NAME: 'yun(development)',
      NEW_RELIC_ENABLED: false,
    },
    env_staging: {
      NODE_ENV: 'staging',
      NODE_CONFIG_DIR: './config/',
      NEW_RELIC_APP_NAME: 'yun(staging)',
      NEW_RELIC_ENABLED: true,
    },
    env_production: {
      NODE_ENV: 'production',
      NODE_CONFIG_DIR: './config/',
      NEW_RELIC_APP_NAME: 'yun',
      NEW_RELIC_ENABLED: true,
    },
  }],
};
