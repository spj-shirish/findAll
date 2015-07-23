var server_url = 'http://spj123.96.lt/insert.php';

function getData(){
	
	console.log('we are in getData method');

	Ext.Ajax.request({
		method: 'POST',
		params: { 'contentType':'json' },
		jsonData: {"product_id":"101"},
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
				/*
				var resultData = JSON.parse(res);
				console.dir(resultData);
				 */
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