seajs.config({
    base:'/assets/libs/',
    alias: {
        'jquery': 'jquery/jquery.min.js',
        'raphael':"raphael/raphael.min.js",
        'json':'plugins/json/jquery.json-2.3.min.js',
        'bootstrap' : "bootstrap/js/bootstrap.js",
        'validate':"plugins/validate/jquery.validate.js",
        'validate.message':"plugins/validate/localization/messages_cn.js",
        'jquery.dialog':"plugins/dialog/jquery.dialog2.js",
        'jquery.dialog.helpers':"plugins/dialog/jquery.dialog2.helpers.js",
        'jquery.dialog.messagecn':"plugins/dialog/messages_cn.js",
        'bootstrap.notify':"plugins/notify/bootstrap-notify.js",
        'bootstrap.datatable':"plugins/datatable/bootstrap-datatable.js",
        'jquery.smartWizard':"plugins/wizard/jquery.smartWizard.js" ,
        'jquery.form':'plugins/form/jquery.form.js',
        'jquery.validate':'plugins/validate/jquery.validate.js',
        'jquery.validate.messagecn':'plugins/validate/localization/messages_cn.js',
        "jquery.ztree":"plugins/ztree/jquery.ztree.core-3.3.min.js",
        "jquery.autocomplete":"plugins/autocomplete/jquery.ui.autocomplete.js",
        "jquery.ui.core":"plugins/autocomplete/jquery.ui.core.js",
        "jquery.ui.position":"plugins/autocomplete/jquery.ui.position.js",
        "jquery.ui.widget":"plugins/autocomplete/jquery.ui.widget.js",
        'jquery.slider':'plugins/slider/jquery.slider.min.js',

        'jquery.flot':'plugins/flot/jquery.flot.js',
        'jquery.flot.crosshair':'plugins/flot/jquery.flot.crosshair.js',
        'jquery.flot.curvedlines':'plugins/flot/jquery.curvedlines-0.2.2.js',
        'jquery.flot.orderBars':'plugins/flot/jquery.flot.orderBars.js',
        'jquery.flot.pie':'plugins/flot/jquery.flot.pie.js',
        'jquery.flot.resize':'plugins/flot/jquery.flot.resize.js',
        'jquery.flot.time':'plugins/flot/jquery.flot.time.js',
        'jquery.flot.categories':'plugins/flot/jquery.flot.categories.js',
        'bootstrap.datepicker':'plugins/datepicker/bootstrap-datepicker.js',

        'moment':'moment/moment.min.js',
        'moment.cn':'moment/zh-cn.js',
        'mustache':'mustache/mustache.js'
    },
    preload:["jquery","bootstrap"]
});



seajs.modify('jquery',function(require,exports){
    window.jQuery = window.$ = exports;
});

define(function(require) {
    var $ = require('jquery');



    $(document).ready(function($) {
            var stats = require('/assets/javascripts/stats');
            stats.creatSystemFlot();
    });

});

