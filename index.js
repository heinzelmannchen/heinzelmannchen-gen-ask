var Q = require('q'),
    _ = require('underscore'),
    Parent = require('heinzelmannchen-generator'),
    inquirer = require('inquirer'),
    Generator = Parent.inherit();

Generator.prototype.createData = function() {
    var q = Q.defer(),
        ask = _.map(this.config.ask, function(obj) {
            if (obj.validation) {
                obj.validate = function(value) {
                    /*jshint evil:true */
                    if ( eval(obj.validation) === true) {
                        return true;
                    } else {
                        return obj.errorMessage;
                    }
                };
            }
            return obj;
        });
    inquirer.prompt(ask, function(answers){
        q.resolve([answers]);
    });
    return q.promise;
};

Generator.explain = function() {
};

Generator.help = function() {
    return 'Generates data using inquirer';
};

module.exports = Generator;
