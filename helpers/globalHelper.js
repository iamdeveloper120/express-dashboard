/**
 * define all your global functions
 * access these functions anywhere in the project
 * use it in the followings (routes, models, views, controller)
 * howToUse globalHelper.sayhellow('param')
 */
var mongoClient = require('mongodb').MongoClient;
module.exports = {
	sayhello: (name) => {
		return 'Hello to global function, mr/mrs ' + name;
	},
	connectMongodb: (dbConfig={}) => {
		var username = dbConfig.username;
		var password = dbConfig.password;
		var database = dbConfig.database;
		var host = dbConfig.host;
		var port = dbConfig.port;
		var cloud = dbConfig.cloud;
		var response = {};
		if(!host || typeof host=='undefined'){
			return {'message':'cloud host required','status':0}
		}
		if(!port || typeof port=='undefined'){
			return {'message':'cloud port required','status':0}
		}
		if(!database || typeof database=='undefined'){
			return {'message':'cloud database name required','status':0}
		}
		var url = 'mongodb://'+host+':'+port+'/'+database;
		try{
			mongoClient.connect(url,{ useNewUrlParser: true })
			return {'message':'success: db connected to '+database,'status':1}
		} catch(e){
			return {'message':'database connection error '+e,'status':0}
		}
	}
}