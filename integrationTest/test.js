var G = require('../index'),
    g = new G();
g.setConfig({
});
g.createData().then(function(data) {
    console.dir(data);
});

console.log(g.explain());
