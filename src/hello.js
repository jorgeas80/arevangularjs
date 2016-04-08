/**
 * Created by jorge on 08/04/16.
 */
var _ = require('lodash');

module.exports = function sayHello(to) {
    return _.template("Hello, <%= name %>!")({name: to});
};