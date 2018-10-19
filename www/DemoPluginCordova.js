var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'DemoPluginCordova', 'coolMethod', [arg0]);
};

module.exports.add = function(arg0,succes,error){
    exec (succes, error, 'DemoPluginCordova', 'add',[arg0])
}