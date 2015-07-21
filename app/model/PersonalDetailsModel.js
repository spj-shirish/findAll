Ext.define('findAll.model.PersonalDetailsModel', {
    extend: 'Ext.data.Model',
    config: {
	fields: [
			 { name : 'productname', type : 'string'},
			 { name : 'companyname', type: 'string'},
			 { name : 'modelnumber', type: 'string'},
			 { name : 'weight', type: 'string'},
			 { name : 'height', type: 'string'},
			 { name : 'length', type: 'string'},
			 { name : 'color', type: 'string'}
		]
	}
});