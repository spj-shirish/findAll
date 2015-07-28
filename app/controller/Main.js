var server_url = 'http://spj123.96.lt/';


function uploadData(jsonData){
	var resultData;
	
	Ext.Ajax.request({
		method: 'POST',
		params: { 'contentType':'json' },
		params: jsonData, 
		url: server_url + "insert.php",
		failure: function(response) 
		{
				console.log("Ajax Call Failure");
		},
		success: function(response, opts) 
		{
		
			console.log("Ajax Call Success");	
			resultData = response.responseText;
			console.log(resultData);
				
		}
	});
	return resultData;
}


function downloadData(){
	var resultData;
	
	Ext.Ajax.request({
		method: 'POST',
		params: { 'contentType':'json' },
		url: server_url + "default.php",
		failure: function(response) 
		{
				alert("Ajax Call Failure");
		},
		success: function(response, opts) 
		{
		
			alert("Ajax Call Success");	
			resultData = response.responseText;
			console.log(resultData);
				
		}
	});
	return resultData;
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
		//Ext.Msg.alert('','onSubmitClicked');	
		
		 var jsonData = 
				{
						"product_id":"151",
						"product_name":"BIKE"
						
				};	 
		//var resultData = uploadData(jsonData);
		var resultData = downloadData();
		
		console.log("ResultData");
		console.dir(resultData);
		var ProductDetailsStore = Ext.getStore('productDetailStore');
		ProductDetailsStore.setData(jsonData);
		console.log("GeCOunt = " + ProductDetailsStore.getCount());
		
	}
	
});