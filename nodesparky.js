
 
/*
var Spark = require('csco-spark');
var spark = Spark({
  uri: 'https://api.ciscospark.com/v1',
  token: 'MzljYWZjZjMtNDM4Ny00ZGJkLWI0OTktMTBjMTM2M2JmN2Q2MjY1Nzc4NTItZDA1'
});


var listRooms = spark.listItemEvt({
  item: 'rooms',
  max: '15' || undefined // Default = 50
});
// Listen for Rooms
listRooms.on('rooms', function(rooms) {
  console.log(rooms)
});

spark.createRoom({ title: 'title'}).then((res) => {
  /*Store the res data?*/

var Sparky = require('node-sparky');
 
var sparky = new Sparky({ token: 'MmExODYwNDktZGE3Ny00OGE3LTgxMzYtZDE0NzdmZjA2ZjIxN2VkMDQyZTMtYjhh' });
 

 //list rooms
sparky.rooms.get(function(err, results) {
  if(!err) console.log(results);
});
 

var listColl= [
	"Armstrong Atlantic State University",
	"Art Academy of Cincinnati",
	"Art Center College of Design",
	"ASA College",
	"Asbury Theological Seminary"];

var collArr=['true','true','true','true'];

//add rooms
var index=0;
listColl.forEach(function(coll){
	if(!collArr[index]){
 		sparky.room.add(coll, function(err, results) {
  			if(!err) {
    			console.log(results);
  			}
		});	
 	}
 	index++;
});


//add person in a room

function addPersonToRoom(roomId,email){

sparky.membership.add(roomId, email, function(err, results) {
  if(!err) {
    console.log(results);
  }
});

	
}