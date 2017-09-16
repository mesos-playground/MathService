const Seneca = require('seneca');

var app = Seneca();

//app.add(plugins.MathPlugin, null);
app.use("MathPlugin");
app.use("HealthPlugin");

console.log("OK");

app.listen({
    //type: 'tcp',
    port: 3000,
    pin: ['role:math','role:health']
}, ()=>console.log("Ready"));
