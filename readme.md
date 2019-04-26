## About Express admin dashboard

Express admin dashboard is simple dashboard that include expressjs skeleton, login, signup, forgot password, send email, admin dashboard starter page that designed in bootstrap 4   

## Download and Setup Project  
download [master.zip](https://github.com/iamdeveloper120/express-dashboard/archive/master.zip) `OR`  
in cmd,`git clone https://github.com/iamdeveloper120/express-dashboard.git`    
`cd express-dashboard`  
`npm install`  
`npm start`  
`localhost:3000` **OR** `http://127.0.0.1:3000`  

## Database configuration
Following directory `config/database.js`  
```javascript
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
```
## Security Vulnerabilities  
If you discover a security vulnerability within Express Dashboard, please send an e-mail to [Muhammad Farhan](https://www.linkedin.com/in/iamdeveloper120/) via [itianz@outlook.com](mailto:itianz@outlook.com). All security vulnerabilities will be promptly addressed.

## License  
The Express dashboard is open-sourced and licensed under the [MIT license](https://opensource.org/licenses/MIT).
