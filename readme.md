# Nest

## next look
https://github.com/sbstjn/node-blog    
day/light mode: https://sbstjn.com/timesheet.js/      
https://cranky-morse-79acc7.netlify.com/    
https://github.com/sitepoint-editors/MicroBlog    

## routing
https://stackoverflow.com/questions/18931452/node-js-get-path-from-the-request

## try markdown or jade
https://stackoverflow.com/questions/8778604/how-do-i-run-a-index-jade-file

## writing json
https://evdokimovm.github.io/javascript/nodejs/2016/11/11/write-data-to-local-json-file-using-nodejs.html
https://www.tutorialkart.com/nodejs/nodejs-parse-json/

JSON.stringify(obj, null, 4)
// formats json before writing to file

## using json
'use strict';
const fs = require('fs');
let rawdata = fs.readFileSync('student.json');  
let student = JSON.parse(rawdata);  
console.log(student); 


## Using Controllers
https://github.com/amiklosi/Comicr/blob/master/app.js

## NodeJS Simple Server Guide
https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/

## 404 impl for beginner
https://ilovecoding.org/lessons/create-a-simple-http-server-with-nodejs

## Nest Structure

1. Package.json
2. node_modules
3. router.js
4. src/controllers
	post-scanner
	post-parser
3. Theme
	css/
	js/
4. api
5. post
