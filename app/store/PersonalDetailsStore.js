Ext.define('findAll.store.PersonalDetailsStore', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        autoSync: true,
        model: 'findAll.model.PersonalDetailsModel',
        storeId: 'PersonalDetailsStore'
    }
});

