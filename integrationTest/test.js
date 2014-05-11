var G = require('../index'),
    g = new G();
g.setConfig({
    ask: [{
        type: 'input',
        name: 'appName',
        message: 'Enter a name for your app'
    }, {
        type: 'checkbox',
        message: 'Select toppings',
        name: 'toppings',
        choices: [{
            name: 'Peperonni'
        }, {
            name: 'Cheese',
            checked: true
        }, {
            name: 'Mushroom'
        }, {
            name: 'Bacon'
        }, {
            name: 'Olives',
            disabled: 'out of stock'
        }, {
            name: 'Extra cheese'
        }]
    }]
});
g.createData().then(function(data) {
    console.dir(data);
});
