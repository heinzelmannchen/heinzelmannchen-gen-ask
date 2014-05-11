var Q = require('q'),
    Parent = require('heinzelmannchen-generator'),
    inquirer = require('inquirer'),
    Generator = Parent.inherit();

Generator.prototype.createData = function() {
    var q = Q.defer();
    inquirer.prompt(this.config.ask, function(answers){
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
