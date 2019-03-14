module.exports = {
    "development": {
        "username": "root",
        "password": "Dilbert1!1",
        "database": "cocotech",
        "host": "localhost",
        "port": 3306,
        "dialect": "mysql"
    },
    
    "production": {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
    }
}