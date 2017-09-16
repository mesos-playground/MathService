const lodash = require('lodash');

module.exports = function MathPlugin(opts) {

    var seneca = this;

    seneca.add('role:math,cmd:sum,ver:1', sum_v1);
    seneca.add('role:math,cmd:product,ver:1', product_v1);

    return { name: 'MathPlugin' };

    // ------------------------------------------------------------------------

    function sum_v1(args, done) {
        validate(args);
        done({ sum: args.a + args.b });
    }

    function product_v1(args, done) {
        validate(args);
        done({ product: args.a * args.b });
    }

    function validate(args) {
        if(!lodash.has(args, 'a'))
            throw new Error("Missing argument 'a'");
        else if(typeof args.a !== 'number')
            throw new Error("Wrong type for argument 'a'");
        else if(!lodash.has(args, 'b'))
            throw new Error("Missing argument 'b'");
        else if(typeof args.b !== 'number')
            throw new Error("Wrong type for argument 'b'");
    }
}
