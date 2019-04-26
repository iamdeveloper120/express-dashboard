/**
| -------------------------------------------------------------------
| DATABASE CONNECTIVITY SETTINGS
| -------------------------------------------------------------------
| This file will contain the settings needed to access your database.
| -------------------------------------------------------------------
| EXPLANATION OF VARIABLES
| -------------------------------------------------------------------
|	['dsn']      The full DSN string describe a connection to the database.
|	['hostname'] The hostname of your database server.
|	['username'] The username used to connect to the database
|	['password'] The password used to connect to the database
|	['database'] The name of the database you want to connect to
| -------------------------------------------------------------------
| DEFAULT DATABASE `mongodb`
| -------------------------------------------------------------------
*/
var defaultdb ='mongodb';
module.exports = {
	defaultDatabase: () => {
		return defaultdb;
	},
	defaultDatabaseSetting: () => {
		return {
			'username':'',
			'password':'',
			'host':'127.0.0.1',
			'port':'27017',
			'database':'iamdeveloper120',
		}
	},
}