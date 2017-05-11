/**
 * Created by mwaseem on 5/11/2017.
 */

var config = require('config');
var Promise = require('bluebird');
var discovery = require('./discovery');
var loopback = Promise.promisifyAll(require('loopback'));
Promise.promisifyAll(fs);

function Main() {


    /////////////////////////////


    var _discovery = discovery();



    return {
        "discovery": _discovery
    }
}
module.exports = Main();