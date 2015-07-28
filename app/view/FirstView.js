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
				xtype:'button',
				id:'submit',
				text:'Submit'
			},
			{
				xtype:'list',
				id:'productList',
				store:'productDetailStore'
			}
		]
	}		
});
