var server_url = 'http://104.197.41.77:8080';

function uploadProductDetails(){
	
	console.log('we are in getData method');
	var productFormObj = Ext.getCmp('uploadProduct');
	var productFormData =  productFormObj.getValues();
		productFormData.sessionId = localStorage.getItem('sessionId');

		jsonData = {
			"sessionId" : localStorage.getItem('sessionId'),
			"productname": Ext.getCmp('productName').getValue(),
			"companyname": Ext.getCmp('companyName').getValue(),
			"modelnumber": Ext.getCmp('modelNumber').getValue(),
			"height": Ext.getCmp('height').getValue(),
			"weight": Ext.getCmp('weight').getValue(),
			"color": Ext.getCmp('color').getValue()
			
		};
		
		console.log('productFormData');
		console.log(productFormData);
	
	Ext.Ajax.request({
		method: 'POST',
		url: server_url+'/api/test/insert',
		params: { 'contentType':'json' },
        jsonData: jsonData,
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
				personalData.removeAll();
				
				personalData.setData(resultData.data);
				
				console.log('Test Data is availble is');
				console.log(personalData.getCount());
				
				
				
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
        			jsonData: {'username':'olivod',
        					 'password':'doctor'},

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
		uploadProductDetails();
		console.log('getData method is executed');
}
	
});