Ext.define('findAll.model.PersonalDetailsModel', {
    extend: 'Ext.data.Model',
    config: {
	fields: [
			 { name : 'firstname', type : 'string'},
			 { name : 'lastname', type: 'string'}
			
		]
	}
});