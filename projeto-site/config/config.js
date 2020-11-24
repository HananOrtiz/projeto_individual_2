module.exports = {
  production: {
    username: 'hanan',
    password: 'qazzxc12@',
    database: 'projeto_individual_bandstudents',
    host: 'bandstudents.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
