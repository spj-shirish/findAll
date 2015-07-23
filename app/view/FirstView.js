Ext.define('findAll.view.FirstView', {
    extend: 'Ext.Container',
    xtype: 'FirstView',
    requires:[
		 'Ext.form.Panel'
	],
    config: {
			
		styleHtmlContent: true,
		scrollable: true,
		layout:'vbox',
		margin:'1% 1% 1% 1%',
        items: [
			{	
				xtype:'formpanel',
				id:'uploadProduct',
				scrollable:false,
				layout:'hbox',
				height:'200px',
				items:[
						{
							xtype:'image',
							id:'productImage',
							width:'40%',
							height:'80',
							src:'resources/images/vips.jpg',
						},
						{
							layout:'vbox',
							width:'55%',
							margin:'0 0 0 5%',
							items:[
								{	
									xtype:'button',
									id:'takePhoto',
									text:'Take Photo',
									pack:'center',
									width:'80%',
									margin:'10% 0 0 0'
									
								},
								{	
									xtype:'button',
									id:'chooseFile',
									text:'Choose File',
									pack:'center',
									margin:'10% 0 0 0',
									width:'80%'
								}
							]
						}

				]
			},
			{	
				xtype:'textfield',
				id:'productName',
				name:'productName',
				margin:'3% 0 0 0',
				placeHolder:'Product Name'
			},
			{	
				xtype:'textfield',
				id:'companyName',
				name:'companyName',
				margin:'3% 0 0 0',
				placeHolder:'Company Name'
			},
			{
				xtype:'textfield',
				id:'model',
				name:'model',
				margin:'3% 0 0 0',
				placeHolder:'Model'
			},
			{
				layout:'hbox',
				margin:'3% 0 0 0',
				items:[
					{
						xtype:'label',
						id:'specifications',
						html:'specifications',
						width:'50%'
					},
					{
						xtype:'label',
						id:'Details',
						html:'Details',
						width:'50%'
					}
				]
			},
			{
				xtype:'textfield',
				id:'weight',
				name:'weight',
				label:'Weight',
				labelWidth:'40%',
				margin:'3% 0 0 0',
				placeHolder:'Weight'
			},
			{
				xtype:'textfield',
				id:'height',
				name:'height',
				label:'Height',
				labelWidth:'40%',
				margin:'3% 0 0 0',
				placeHolder:'Height'
			},
			{
				xtype:'textfield',
				id:'length',
				name:'length',
				label:'Length',
				labelWidth:'40%',
				margin:'3% 0 0 0',
				placeHolder:'Length'
			},
			{
				xtype:'textfield',
				id:'color',
				name:'color',
				label:'Color',
				labelWidth:'40%',
				margin:'3% 0 0 0',
				placeHolder:'Color'
			},
			{
				layout:'hbox',
				pack: 'center',
				margin:'7% 0 0 28%',
				items:[
					{
						xtype:'button',
						id:'submit',
						text:'Submit'
					},
					{
						xtype:'button',
						id:'cancel',
						text:'Cancel',
						margin:'0 0 0 3%'
					}
				]
			}
		
		]
	}
});
