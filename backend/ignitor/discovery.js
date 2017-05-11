/**
 * Created by mwaseem on 5/11/2017.
 */

var Promise = require("bluebird");

module.exports={
    discoverTables:function(ds){

        ds.discoverModelDefinitions({views: true, limit: 20}, cb);

    }
}