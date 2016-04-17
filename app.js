"use strict";

var app = require('express')();
var express = require('express');
var cfenv = require('cfenv');
var cors = require('cors');
var app = express();
var PushBullet = require('pushbullet');
var pusher = new PushBullet('Xej3VrcULqqRjo7SPkl7WJsaTkFTao8E');
var bodyParser = require('body-parser');
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var parseString = require('xml2js').parseString;

var hod = require('havenondemand');
var request=require('request');
//var apikey='f3129194-4f03-4419-80c2-f3aa041baf9a';
var apikey='f9e927d7-6497-4dee-9f69-5500fb76a5ad';
var client = new hod.HODClient('http://api.idolondemand.com', apikey);
var fs=require("fs");
var fpp = require('face-plus-plus');
fpp.setApiKey('b5e783aaf612ece56decaf2ae5e6f8c8');
fpp.setApiSecret('lI2k8MecfCg9jExmgTz4JcapfOj1MSP1');
var jobId;

var Sparky = require('node-sparky');
var sparky = new Sparky({ token: 'NmJkMjA1NGItMDQxOS00ODQ0LThlZDQtOTkzNGYxYTllMGFlMjJmNTkwYzYtOTBm' });

var persons = [];

app.listen(1337, '127.0.0.1', function() {
	console.log("server starting on " + 1337);
});


app.get('/fppCheck',function(reqst,respns){
	var parameters = {
		attribute: 'gender,age',
		img : {
			//value: fs.readFileSync('../../../EHARIHS/Downloads/test.jpg')
			value: fs.readFileSync('/Users/Darshan/Downloads/test.png')
			, meta: {filename:'test.png'}
		}
	};
	fpp.post('detection/detect', parameters, function(err, res) {
		console.log(res);
		respns.send(res);
		//fs.unlinkSync('../../../EHARIHS/Downloads/test.jpg');
		fs.unlinkSync('/Users/Darshan/Downloads/test.png');
		respns.end();
	});
});



app.get('/facedetectCheck',function(reqst,respns){
	//data={'file':'../../../EHARIHS/Downloads/test.jpg',	'additional':'true'}
	data={'file':'/Users/Darshan/Downloads/test.png',	'additional':'true'}
	client.call('detectfaces', function(err,resp,body){
		respns.send(body);
		//fs.unlinkSync('/Users/Darshan/Downloads/test.png');
		respns.end();
	}, data)
});

var sentimentText='';
app.get('/analyzeSentiment',function(reqst,respns){
	var data = {'text' : sentimentText};
	console.log(sentimentText);
	client.call('analyzesentiment', function(err,resp,body){
		respns.send(body);
		respns.end();
	}, data);
});

app.get('/analyzeSentimentalAnalysis',function(reqst,respns){
	var data = {'text' : reqst.query.sentiment};
	console.log(sentimentText);
	client.call('analyzesentiment', function(err,resp,body){
		respns.send(body);
		respns.end();
	}, data);
});

var text='';
app.get('/extracttext',function(reqst,respns){
	data={'file':'./resume.pdf'}
	client.call('extracttext', function(err,resp,body){
		respns.send(body);
		text=body.document[0].content;
		text=text.replace('(123)456-7890','4697672278');
		text=text.replace('JNTUH','University of Texas');
		respns.end();
	}, data)

});

app.get('/resscore',function(reqst,respns){
	request.post(
    'http://rezscore.com/a/c7c65b/grade',
    { form: { resume: './res.pdf' } }, function(err,res,body){
		var xml = body;
		parseString(xml, function (err, result) {
		    console.log(result.rezscore.score);
		    respns.send(result);
			respns.end();
		});
		
	});
});

app.get('/analyzeSpeech',function(reqst,respns){
	data={'file':'./public/recordrtc-nodejs/uploads/Test.wav'};
	client.call('recognizespeech', function(err,resp,body){
		console.log(body);
		jobId=body.data.jobID;
		respns.send(body);
		//fs.unlinkSync('./public/recordrtc-nodejs/uploads/Test.wav');
		respns.end();
	}, data,true)
});


app.get('/checkStatus',function(reqst,respns){
-	request('http://api.idolondemand.com/1/job/status/'+jobId+'?apikey=f3129194-4f03-4419-80c2-f3aa041baf9a',function(err,res,body){
		console.log("SEE"+JSON.parse(body).actions);
		respns.send(JSON.parse(body));
		try{
		sentimentText=JSON.parse(body).actions[0].result.document[0].content;
		}
		catch(err){
			//
		}
		finally{
		respns.end();
		}
	});
});

app.get('/conceptExtraction',function(reqst,respns){
	data={'text':text}
	client.call('extractconcepts', function(err,resp,body){
		respns.send(body);
		respns.end();
	}, data)

});

app.get('/extractentities',function(reqst,respns){
	data={'text':text,'entity_type':['person_name_component_eng','address_us','people_eng','companies_eng','organizations','places_eng','professions','universities','person_fullname_eng','number_phone_us','languages','internet','internet_email']}
	client.call('extractentities', function(err,resp,body){
		respns.send(body);
		respns.end();
	}, data)
});

//ujyob53T1uSsjz7O3P0Jl6
//ujxoVhoOrjosjz7O3P0Jl6
app.get('/sendPushBullet',function(reqst,respns){
	var name=reqst.query.name;
	pusher.note('ujxoVhoOrjosjz7O3P0Jl6', 'UniConnect', 'You\'ve got a video call request from '+name+".Navigate to https://opentokrtctestdemo.herokuapp.com/demo to join the video call", function(error, response) {
                    
                    respns.end();});
});

app.get('/predictor',function(reqst,respns){
	var data = {'file' : 'test2.csv','service_name':'Suggest'};
  client.call('predict', function(err,resp,body){
    respns.send(body);
  }, data);
});


var collegenames=["The University of Texas at Austin",
	"The University of Texas at Dallas",
	"The University of Texas at Arlington",
	"University of California-Berkeley",
	"University of Colorado Boulder",
	"Virginia Polytechnic Institute and State University"];

//add rooms
collegenames.forEach(function(coll){
  
  sparky.room.add(coll, function(err, results) {
  if(!err) {
    console.log(results);
  }
});
});

app.get('/videoCall',function(reqst,respns){
	var sip=reqst.query.sip;
	//86633293@ciscospark.com
	//sip="82921369@ciscospark.com";
	request('https://api.tropo.com/1.0/sessions?action=create&token=436e6379527861734f776f444e4b5a4b43675378484959496b4442466f4e515167575678694a595248454862&actionPerform=1&sip='+sip,function(err,res,body){
		respns.send(body);
		respns.end();
	});
});



app.get('/sendSMS',function(reqst,respns){
	var ph=reqst.query.ph;
	var msg=reqst.query.msg;//"some msg";

	
	//ph=14697672278
	request('https://api.tropo.com/1.0/sessions?action=create&token=436e6379527861734f776f444e4b5a4b43675378484959496b4442466f4e515167575678694a595248454862&actionPerform=2&ph='+ph+'&msg='+msg,function(err,res,body){
		respns.send(body);
		respns.end();
	});
});


var num=parseInt(Math.random()*10000);
console.log(num);
app.get('/verifyPh',function(reqst,respns){
	var ph=reqst.query.ph;
	var msg=num;
	request('https://api.tropo.com/1.0/sessions?action=create&token=436e6379527861734f776f444e4b5a4b43675378484959496b4442466f4e515167575678694a595248454862&actionPerform=2&ph='+ph+'&msg='+msg,function(err,res,body){
		respns.send(body);
		respns.end();
	});
});

app.get('/verifySMS',function(reqst,respns){
 	var code=reqst.query.codeNum;
 	if(code==num)
 	{	
 		num=parseInt(Math.random()*10000);
 		respns.send({"Code":"0"});
 		respns.end();
 	}
 	else{
 		num=parseInt(Math.random()*10000);
 		respns.send({"Code":"-1"});
 		respns.end();
 	}
 });

//Person class

class PersonMain{ 
    constructor(name, email, age, gpa, univName, language) {
        this.name = name;
        this.age  = age;
        this.gpa  = gpa;
        this.univName = univName;
        this.language = language;
        this.email = email;
        this.Person = function(){

        sparky.person.byEmail(email, function(err, results) {
  				 if(!err) {
  				return results;
  				}
  				else{
  				 console.log(err);
  				}
		});
       }
        
    }
    toString() {
        return "My name is "+this.name+" and my email is "+this.email;
    }
}



app.get('/createUser',function(req,resp){
	var name=req.query.name;
	var age=req.query.age;
	var gpa=req.query.gpa;
	var univName=req.query.univName;
	var language=req.query.language;
	var email=req.query.email;

	var person = new PersonMain(name, email, age, gpa, univName, language);
	persons.push(person);

	// id is same as univName ; since we don't know the room id when the user selects the university
	var room_this = sparky.room.get(univName, function(err, results) {
  if(!err) {
    console.log(results);
  }
});

	var membership_obj = sparky.membership.add(room_this.id, email, function(err, results) {
  if(!err) {
    console.log(results);
  }
});


});

//get user by name

app.get('/getUserByEmail',function(req,resp){

	var email=req.query.email;

		sparky.person.byEmail(email, function(err, results) {
  		
  		if(!err) {
    	resp.send(results);
    	resp.end();
  		}
  		else{
  			console.log(err);
  		}
	});


});

//get list of all rooms
app.get('/getRoomList',function(req,resp){
sparky.rooms.get(function(err, results) {
  if(!err) {
    	resp.send(results);
    	resp.end();
  		}
  		else{
  			console.log(err);
  		}
});

});

//create or add a room with title
app.get('/createRoom',function(req,resp){
var title = req.query.title;
sparky.room.add(title, function(err, results) {
  if(!err) {
    	resp.send(results);
    	resp.end();
  		}
  		else{
  			console.log(err);
  		}
});

});
//Y2lzY29zcGFyazovL3VzL1JPT00vMzIxZTY3MjAtMDRhZi0xMWU2LWI4MTktNzcwNzhmYWRlZTU4
//get Details of the room; 
/* sip must be set to true: example
{
	"id": "Y2lzY29zcGFyazovL3VzL1JPT00vNjA0NDcwMTAtMDRhZC0xMWU2LWEwZWQtYzc4MmRiNGY2ODVh",
	"title": "NIKHIL TEMP",
	"type": "group",
	"isLocked": false,
	"sipAddress": "81342662@ciscospark.com",
	"lastActivity": "2016-04-17T15:02:17.233Z",
	"created": "2016-04-17T15:02:17.233Z"
}
*/

app.get('/getRoomDetails',function(req,resp){
var id = req.query.roomid;
sparky.room.get(id, function(err, results) {
  if(!err) {
    	resp.send(results);
    	resp.end();
  		}
  		else{
  			console.log(err);
  		}
});
});

//87120645@ciscospark.com

//add person to a room
app.get('/addPersonToRoom',function(req,resp){

	var email = req.query.email;
	var roomId =  req.query.roomID;

		sparky.membership.add(roomId, email, function(err, results) {
  		if(!err) {
  			resp.send(results);
    		resp.end();
    		console.log(results+"added");
  		}
	});

});



//get list of members in  a room

app.get('/getListOfMembersInRoom',function(req,resp){

	var roomID =  req.query.roomID;

			sparky.memberships.byRoom(roomID, function(err, results) {
 			 if(!err) {
  				 resp.send(results);
    			 resp.end();
  				}
			});
});







