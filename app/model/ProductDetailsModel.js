Ext.define('findAll.model.ProductDetailsModel', {
    extend: 'Ext.data.Model',
    config: {
	fields: [
			 { name : 'product_id', type : 'int'},
			 { name : 'product_name', type: 'string'}
			
		]
	}
});