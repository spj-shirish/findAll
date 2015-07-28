Ext.define('findAll.store.ProductDetailsStore', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        autoSync: true,
        model: 'findAll.model.ProductDetailsModel',
        storeId: 'productDetailStore'
    }
});

