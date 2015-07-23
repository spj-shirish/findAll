var server_url = 'http://spj123.96.lt/insert.php';

function getData(){
	
	console.log('we are in getData method');

	//var data= [ {"productId","151"},{"productName","bike245"} ];
	var data = { products: [ {"productId":"101},{"productName":"BikePart"}]};

	Ext.Ajax.request({
		method: 'POST',
		params: { 'contentType':'json' },
		params: data, 
		url: server_url,
		
		
		failure: function(response) 
		{
				alert("Ajax Call Failure");
			
		},
		success: function(response, opts) 
		{
		
				alert("Ajax Call Success");	
				var res = response.responseText;
				console.log(res);
				
				//var resultData = JSON.parse(res);
				//console.dir(resultData);
				
		}
	});


 

 

	
	
}

Ext.define('findAll.controller.Main', {
    extend: 'Ext.app.Controller',
	config:{
			refs:{
				submit:'#submit'
			},
			control:{
				
				submit:{
					tap:'onSubmitClicked'
				}
				
			}
			
			
	},
	launch:{
		
	},
	onSubmitClicked:function(button){
		Ext.Msg.alert('','We are on onSubmitClicked method');	
		getData();
		console.log('getData method is executed');
}
	
});