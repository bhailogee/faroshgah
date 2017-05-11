var config =require('config');
var Promise = require('bluebird');
var _=require("underscore");

module.exports=function(app) {

    if (config.datasources.discovery) {

        var ds = app.datasources[config.datasources.ds];
        Promise.promisifyAll(ds);

        /* ds.discoverAndBuildModels('store',{visited: {}, associations: true},function(er,models){

         models.Store.findOne({},function(err,st){
         var a=st;
         })
         });
         });
         */

        ds.discoverModelDefinitions({"schema": config.datasources.db}, function (er, models) {

            var models = _.map(models,function (modelName) {
                return ds.discoverAndBuildModelsAsync(modelName.name, {
                    "schema": config.datasources.db,
                    "relations": true
                });
            });

            Promise.all(models).then(function(a){
                a.forEach(function(m){
                    //exposing these models over rest
                    //app.model(m,{"public":true});
                });
            });
        });
    }

}