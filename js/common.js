/**
 * Created by thomaslau on 16/2/5.
 */
//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        zepto: 'zepto/zepto',
        underscore: 'underscore/underscore'
    },
    shim: {
        zepto: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        }
    }
});
