var server_url = 'http://104.197.41.77:8080';

function getData(){
	
	console.log('we are in getData method');

	Ext.Ajax.request({
		method: 'POST',
		url: server_url+'/api/test',
		params: { 'contentType':'json' },
		jsonData: {
				"limit":100,
				"offset":0, 
				"params":{"executeCountSql": "N"}, 
				"sessionId":localStorage.getItem("sessionId"),
			  },
		failure: function(response) 
		{
				handleFailure(response,true);
			
		},
		success: function(response, opts) 
		{
			var resultData = JSON.parse(response.responseText);
			
			if(resultData.$error && resultData.$error=='Y')
			{
					handleFailure(resultData,false);
					return;
			}
			var personalData = Ext.getStore('PersonalDetailsStore');
				personalData.setData(resultData.data);
				console.log('Test Data is availble is');
				console.log(personalData.getCount());
				
				var record = personalData.getAt(0); 

				console.log('record');
				console.log(record);
				Ext.getCmp('firstName').setValue(record.get('firstname'));
				Ext.getCmp('lastName').setValue(record.get('lastname'));
				
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
		if(!localStorage.getItem("sessionId"))
		{
			Ext.Ajax.request({
        			url: server_url+'/api/signin',
					headers: {'Content-Type':'application/json',
        							 'X-Requested-With': 'XMLHttpRequest',
        							 withCredentials: true,
        							useDefaultXhrHeader: false
        					},

        			method: 'POST',
        			jsonData: {'username':'username',
        					 'password':'password'},

        			failure: function(response)
        			{

        				handleFailure(response,true);

						},
        			success: function(response, opts)
        			{
        				var resultData = JSON.parse(response.responseText);
        				if(resultData.$error && resultData.$error=='Y')
        				{
        					handleFailure(resultData,false);
        					return;
        				}

				if(resultData["sessionId"])
				{
					localStorage.setItem("sessionId", resultData["sessionId"]);
				}
			}
		});	//signin
	}	
		getData();
		console.log('getData method is executed');
}
	
});