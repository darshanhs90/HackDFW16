var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http) {
	$scope.resume=false;
	$scope.form=false;
	$scope.showResume=function($val)
	{
		if($val==0)
			$scope.resume=true;
		else
			$scope.form=true;
	}    
	$scope.resumeContent='';
	$scope.valShow=1;
	$scope.parsedAddress='',$scope.parsedExperience='',$scope.parsedMail='',$scope.parsedName='',$scope.parsedPhone='';
	$scope.parsedGre='',$scope.parsedToefl='';
	
	$scope.signUp=function(){
		alertify.success('Sign Up succesful');
		$scope.resume=false;
		$scope.form=true;
	}
	$scope.signIn=function(){
		alertify.success('Signed in succesfully');
		window.location.href="student-index.html#two";
	}
	$scope.rating=3;
	$scope.verifier=false;
	$scope.getClass=function($val)
	{
		switch($val){
			case '0':return $scope.rating>0?"rated":"";break;
			case '1':return $scope.rating>1?'rated':'';break;
			case '2':return $scope.rating>2?'rated':'';break;
			case '3':return $scope.rating>3?'rated':'';break;
			case '4':return $scope.rating>4?'rated':'';break;
			default:break;

		}
	}


	$scope.collegenames=["The University of Texas at Austin",
	"The University of Texas at Dallas",
	"The University of Texas at Arlington",
	"University of California-Berkeley"];

	$(document).on('mouseenter', '.divbutton', function () {
		$(this).find(":button").show();
		$(this).find("div").show();
	}).on('mouseleave', '.divbutton', function () {
		$(this).find(":button").hide();
		$(this).find("div").hide();
	});
	var serverId;
	$scope.getList=function(){
		serverId=document.getElementById('select_path').value;
		switch(serverId){
			case "The University of Texas at Austin":$scope.users=[];
$scope.users.push({'phone':'14694509828','emailid':'','id':'0','emailid':'sxn146630@utdallas.edu','image':'images/sreesha.jpg','name':'Sreesha N','university':'UT Dallas','rating':'4','reviews':'I am really annoyed with your poor performance recently','img':'images/darshan.jpg'})
$scope.users.push({'phone':'14694509829','emailid':'','id':'1','emailid':'hsdars@gmail.com','image':'images/darshan.jpg','name':'Darshan HS','university':'UT Dallas','rating':'3','reviews':'Hey, good job with that thing you did recently','img':'images/newone.jpg'})
$scope.users.push({'phone':'14694509828','emailid':'','id':'2','emailid':'sxn146630@utdallas.edu','image':'images/bhargavi.jpg','name':'Bhargavi R','university':'UT Dallas','rating':'5','reviews':'I am really annoyed with your poor performance recently','img':'images/sreesha.jpg'})
$scope.users.push({'phone':'14694509829','emailid':'','id':'3','emailid':'sxn146630@utdallas.edu','image':'images/shivu.jpg','name':'Shivu G','university':'UT Dallas','rating':'2','reviews':'Hey, good job with that thing you did recently','img':'images/newone2.jpg'})
$scope.users.push({'phone':'14694509828','emailid':'','id':'4','emailid':'sxn146630@utdallas.edu','image':'images/newone.jpg','name':'Ritu P','university':'UT Dallas','rating':'5','reviews':'I am really annoyed with your poor performance recently','img':'images/shivu.jpg'})
$scope.users.push({'phone':'14694509829','emailid':'','id':'5','emailid':'sxn146630@utdallas.edu','image':'images/newone2.jpg','name':'NoName','university':'UT Dallas','rating':'4','reviews':'Hey, good job with that thing you did recently','img':'images/bhargavi.jpg'})
break;
			case "The University of Texas at Dallas":$scope.users=[];
$scope.users.push({'phone':'14694509828','emailid':'','id':'0','emailid':'sxn146630@utdallas.edu','image':'images/newone.jpg','name':'Sreesha N','university':'UT Dallas','rating':'4','reviews':'I am really annoyed with your poor performance recently','img':'images/darshan.jpg'})
$scope.users.push({'phone':'14694509829','emailid':'','id':'1','emailid':'hsdars@gmail.com','image':'images/newone2.jpg','name':'Darshan HS','university':'UT Dallas','rating':'3','reviews':'Hey, good job with that thing you did recently','img':'images/newone.jpg'})
$scope.users.push({'phone':'14694509828','emailid':'','id':'2','emailid':'sxn146630@utdallas.edu','image':'images/bhargavi.jpg','name':'Bhargavi R','university':'UT Dallas','rating':'5','reviews':'I am really annoyed with your poor performance recently','img':'images/sreesha.jpg'})
$scope.users.push({'phone':'14694509829','emailid':'','id':'3','emailid':'sxn146630@utdallas.edu','image':'images/shivu.jpg','name':'Shivu G','university':'UT Dallas','rating':'2','reviews':'Hey, good job with that thing you did recently','img':'images/newone2.jpg'})
$scope.users.push({'phone':'14694509828','emailid':'','id':'4','emailid':'sxn146630@utdallas.edu','image':'images/sreesha.jpg','name':'Ritu P','university':'UT Dallas','rating':'5','reviews':'I am really annoyed with your poor performance recently','img':'images/shivu.jpg'})
$scope.users.push({'phone':'14694509829','emailid':'','id':'5','emailid':'sxn146630@utdallas.edu','image':'images/darshan.jpg','name':'NoName','university':'UT Dallas','rating':'4','reviews':'Hey, good job with that thing you did recently','img':'images/bhargavi.jpg'})
break;
			case "The University of Texas at Arlington":$scope.users=[];
$scope.users.push({'phone':'14694509828','emailid':'','id':'0','emailid':'sxn146630@utdallas.edu','image':'images/bhargavi.jpg','name':'Sreesha N','university':'UT Dallas','rating':'4','reviews':'I am really annoyed with your poor performance recently','img':'images/darshan.jpg'})
$scope.users.push({'phone':'14694509829','emailid':'','id':'1','emailid':'hsdars@gmail.com','image':'images/nikhil.jpg','name':'Darshan HS','university':'UT Dallas','rating':'3','reviews':'Hey, good job with that thing you did recently','img':'images/newone.jpg'})
$scope.users.push({'phone':'14694509828','emailid':'','id':'2','emailid':'sxn146630@utdallas.edu','image':'images/prajwal.jpg','name':'Bhargavi R','university':'UT Dallas','rating':'5','reviews':'I am really annoyed with your poor performance recently','img':'images/sreesha.jpg'})
$scope.users.push({'phone':'14694509829','emailid':'','id':'3','emailid':'sxn146630@utdallas.edu','image':'images/shivu.jpg','name':'Shivu G','university':'UT Dallas','rating':'2','reviews':'Hey, good job with that thing you did recently','img':'images/newone2.jpg'})
$scope.users.push({'phone':'14694509828','emailid':'','id':'4','emailid':'sxn146630@utdallas.edu','image':'images/newone.jpg','name':'Ritu P','university':'UT Dallas','rating':'5','reviews':'I am really annoyed with your poor performance recently','img':'images/shivu.jpg'})
$scope.users.push({'phone':'14694509829','emailid':'','id':'5','emailid':'sxn146630@utdallas.edu','image':'images/newone2.jpg','name':'NoName','university':'UT Dallas','rating':'4','reviews':'Hey, good job with that thing you did recently','img':'images/bhargavi.jpg'})
break;
			case "University of California-Berkeley":$scope.users=[];
$scope.users.push({'phone':'14694509828','emailid':'','id':'0','emailid':'sxn146630@utdallas.edu','image':'images/arvind.jpg','name':'Sreesha N','university':'UT Dallas','rating':'4','reviews':'I am really annoyed with your poor performance recently','img':'images/darshan.jpg'})
$scope.users.push({'phone':'14694509829','emailid':'','id':'1','emailid':'hsdars@gmail.com','image':'images/naga.jpg','name':'Darshan HS','university':'UT Dallas','rating':'3','reviews':'Hey, good job with that thing you did recently','img':'images/newone.jpg'})
$scope.users.push({'phone':'14694509828','emailid':'','id':'2','emailid':'sxn146630@utdallas.edu','image':'images/darshan.jpg','name':'Bhargavi R','university':'UT Dallas','rating':'5','reviews':'I am really annoyed with your poor performance recently','img':'images/sreesha.jpg'})
$scope.users.push({'phone':'14694509829','emailid':'','id':'3','emailid':'sxn146630@utdallas.edu','image':'images/sreesha.jpg','name':'Shivu G','university':'UT Dallas','rating':'2','reviews':'Hey, good job with that thing you did recently','img':'images/newone2.jpg'})
$scope.users.push({'phone':'14694509828','emailid':'','id':'4','emailid':'sxn146630@utdallas.edu','image':'images/newone.jpg','name':'Ritu P','university':'UT Dallas','rating':'5','reviews':'I am really annoyed with your poor performance recently','img':'images/shivu.jpg'})
$scope.users.push({'phone':'14694509829','emailid':'','id':'5','emailid':'sxn146630@utdallas.edu','image':'images/newone2.jpg','name':'NoName','university':'UT Dallas','rating':'4','reviews':'Hey, good job with that thing you did recently','img':'images/bhargavi.jpg'})
break;
		}

		var roomId='';
		$http.get('http://localhost:1337/getRoomList').success(function(res){
			var arr=res;
			for (var i = 0; i <=arr.length; i++) {
				if(arr[i].title==serverId){
					roomId=arr[i].id;
					break;
				}
			};
			$http.get('http://localhost:1337/getListOfMembersInRoom?roomID='+roomId).success(function(res1){
				console.log('members in room');
				console.log(res1);
			})
		})
		//get members corresponding to a specific roomid

		/*$http.get('http://localhost:1337/getAdvisors?univname='+serverId)
			.success(function(res){
				console.log(res);
			});*/


window.location.href="student-index.html#work";
}

$scope.users=[];
$scope.users.push({'phone':'14694509828','emailid':'','id':'0','emailid':'sxn146630@utdallas.edu','image':'images/sreesha.jpg','name':'Sreesha N','university':'UT Dallas','rating':'4','reviews':'I am really annoyed with your poor performance recently','img':'images/darshan.jpg'})
$scope.users.push({'phone':'14694509829','emailid':'','id':'1','emailid':'hsdars@gmail.com','image':'images/darshan.jpg','name':'Darshan HS','university':'UT Dallas','rating':'3','reviews':'Hey, good job with that thing you did recently','img':'images/newone.jpg'})
$scope.users.push({'emailid':'','id':'2','emailid':'sxn146630@utdallas.edu','image':'images/bhargavi.jpg','name':'Bhargavi R','university':'UT Dallas','rating':'5','reviews':'I am really annoyed with your poor performance recently','img':'images/sreesha.jpg'})
$scope.users.push({'emailid':'','id':'3','emailid':'sxn146630@utdallas.edu','image':'images/shivu.jpg','name':'Shivu G','university':'UT Dallas','rating':'2','reviews':'Hey, good job with that thing you did recently','img':'images/newone2.jpg'})
$scope.users.push({'emailid':'','id':'4','emailid':'sxn146630@utdallas.edu','image':'images/newone.jpg','name':'Ritu P','university':'UT Dallas','rating':'5','reviews':'I am really annoyed with your poor performance recently','img':'images/shivu.jpg'})
$scope.users.push({'emailid':'','id':'5','emailid':'sxn146630@utdallas.edu','image':'images/newone2.jpg','name':'NoName','university':'UT Dallas','rating':'4','reviews':'Hey, good job with that thing you did recently','img':'images/bhargavi.jpg'})
$scope.usersNew='';
$scope.userRating='';
$scope.userUniv='';
$scope.userName='';


$scope.openModal=function($val)
{   
	$scope.valShow=1;
	$scope.avg='';
	$scope.user=$scope.users[$val];
	$scope.userUniv=serverId;
	$scope.verifier=false;
	$("#btnmodal").click();
}

$scope.makeVideoCall=function($val){
	//create room
	//add me and other person to that room
	//get sip of that room
	var sipId='';
	var Id='';
	$http.get('http://localhost:1337/createRoom?title=videoCall').success(function(res){
		console.log(res);
		Id=res[0].id;
		$http.get('http://localhost:1337/addPersonToRoom?roomID='+Id+'&email=hsdars@gmail.com').success(function(r){
			$http.get('http://localhost:1337/getRoomDetails?roomid='+Id).success(function(res1){
				console.log(res1);
				sipId=res1[0].sipAddress;
				console.log(sipId);
				$http.get('http://localhost:1337/videoCall?sip='+sipId).success(function(res3){
					console.log(res3);
					window.location.href="https://web.ciscospark.com/#/rooms/8d2596e0-0340-11e6-b0ef-05795347c21f";
				});
			})
		})
	})
}

$scope.makeAudioCall=function($val){
	$http.get('http://localhost:1337/sendSMS?ph='+$scope.users[$val].phone+'&msg=Join+the+bridge+13176590432.+conferenceID+1337').success(function(res){
		$http.get('http://localhost:1337/sendSMS?ph=14697672278&msg=Join+the+bridge+13176590432.+conferenceID+1337').success(function(res){
			alertify.success('Join the bridge with conference id 1337');
		})
	})
}

$scope.one='0';$scope.two='0';
$scope.three='0';$scope.four='0';



$scope.verifyPhone=function(){

	$http.get('http://localhost:1337/verifyPh?ph='+$scope.phn).success(function(res){
		$("#btnmodal").click();
		$scope.verifier=true;
	})
}

$scope.showSubmit=false;
$scope.completeVerify=function(){
	var numCode=$scope.one+''+$scope.two+''+$scope.three+''+$scope.four;
	$http.get('http://localhost:1337/verifySMS?codeNum='+numCode).success(function(res){
		if(res.Code=='0'){
			alertify.success('verification succesful');
			$scope.showSubmit=true;
		}
		else{
			alertify.error('Invalid Code');
		}
	})

}

});

app.directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'cover'
            });
        });
    };
});