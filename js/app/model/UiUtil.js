/**
 * Created by thomaslau on 16/2/14.
 */
define(function (require) {



    var $ = require('zepto');

    var UiUtil = function($page){
        return {
            pagination : $('div.js-pagination-ex',$page)
        }
    };


    var init = function($page){

        var uiUtil = new UiUtil($page);
        for(var key in uiUtil){
            var $ele = uiUtil[key];
            if($ele && $ele.size() > 0){
                var thisRequire = require('./' + key);
                if(thisRequire){
                    thisRequire.init();
                }
            }
        }
    };

    return {
        init : init
    };
});
