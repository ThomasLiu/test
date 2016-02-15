/**
 * Created by thomaslau on 16/2/5.
 */
define(function (require) {
    var $ = require('zepto'),
        lib = require('./lib'),
        controller = require('./controller/c1'),
        model = require('./model/m1'),
        underscore = require('underscore');

    require('./model/UiUtil').init(lib.getBody());

    var cssUrl = require.toUrl('./main.css');
    console.log('cssUrl = ', cssUrl);

    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    $(function () {
        controller.render(lib.getBody());

        //Display backbone and underscore versions
        lib.getBody()
            .append('<div>underscore version: ' + underscore.VERSION + '</div>');



    });
});
