var Q = require('q'),
    Parent = require('heinzelmannchen-generator'),
    Generator = Parent.inherit();

Generator.prototype.createData = function() {
};

Generator.explain = function() {
};

Generator.help = function() {
    return 'Generates data using inquirer';
};

module.exports = Generator;
