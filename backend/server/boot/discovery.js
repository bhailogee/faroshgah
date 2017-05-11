var config =require('config');
var Promise = require('bluebird');

module.exports=function(app){

    if(config.datasources.discovery)
    {
        config.datasources.db.forEach(function(dsName) {
            var ds = app.datasources[dsName];
            Promise.promisifyAll(ds);

            ds.discoverModelDefinitions({views: true, limit: 20},function(r){
               var rr=r;
            });

        });

    }

}