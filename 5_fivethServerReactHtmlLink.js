/**
 * node.js test
 * route without express
 * react Html Code List UP
 */

const http = require('http');
const url = require('url');
const fs = require('fs');

//서버객체의 생성
http.createServer( (req, res) => {
		const path = url.parse(req.url, true).pathname;
		var htmlName = '';
		if (req.method != 'GET') {
			res.end('<h1>request method wrong!!!</h1>', 'utf-8');
		}
		
		res.writeHead(200, { 'Content-Type' : 'text/html' });
	
		if (path === '/') {
			res.write('<h1>react page list</h1>');
			res.write('<hr/>');
			res.write('<ul>');
			res.write('<li><a href="/about">basic html file</a> : node.js file output</li>');
			res.write('<li><a href="/react1">1. Shopping List</a> : basic render </li>');
			res.write('<li><a href="/react2">2. Class Inherit</a> : jquery output after class inherit </li>');
			res.write('<li><a href="/react3">3. Variable Set</a> : variable setting </li>');
			res.write('<li><a href="/react4">4. Color Change Use this</a> : color change action bind "this" in button Object  </li>');
			res.write('<li><a href="/react5">5. Clock </a> : React Life Cycle </li>');
			res.write('<li><a href="/react6">6. Input Form </a> : React Life Cycle & Form Control & Events </li>');
			res.write('</ul>');
			res.end();

		} else {
			
				if (path === '/about'){
					htmlName = '/html/about.html';
				} else if (path === '/react1'){
					htmlName = '/ReactHtml/1_List.html';
				} else if (path === '/react2'){
					htmlName = '/ReactHtml/2_ClassInherit.html';
				} else if (path === '/react3'){
					htmlName = '/ReactHtml/3_VariableSet.html';
				} else if (path === '/react4'){
					htmlName = '/ReactHtml/4_This_ColorChange.html';
				} else if (path === '/react5'){
					htmlName = '/ReactHtml/5_Lifecycle_Clock.html';
				} else if (path === '/react6'){
					htmlName = '/ReactHtml/6_Form_Event_Lifecycle_Clock.html';
				}
				
				fs.readFile(__dirname + htmlName, (err, data) => {
					if (err) {
						res.end('<h1>not exist page!!!</h1>', 'utf-8');
					}
					res.end(data, 'utf-8');
				});	
		}
		
}).listen(3000, function(){
	console.log("server start at port 3000");	
});