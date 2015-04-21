(function ($) {
    "use strict";

    //var expression;

    var evExprF = function () {
        var expression = $('#expr').val();
        if (expression === '' || expression === " " || expression === null) {
            $("#resultExpr").attr('class', 'resultExprNA');
            $('#resultExpr').text('ERR');
            $('#lablelerr').text('There is an error in expression:');
            $('#errmsg').text('- Cannot be empty.');
        } else {
            $("#resultExpr").attr('class', 'resultExpr');
            $('#resultExpr').text(eval(expression));
            $('#lablelerr').text('');
            $('#errmsg').text('');
        }
    };

    //var saveSettings = function () {
    //    try {
    //        var tipPct = parseFloat($('#tipPercentage').val());
    //        localStorage.setItem('tipPercentage', tipPct);
    //        tipPercent = tipPct;
    //        window.history.back();
    //    } catch (ex) {
    //        alert('Tip percentage must be a decimal value');
    //    }
    //};

    $(document).on("ready", function () {
        $('#evExpr').on('click', evExprF);
        //$('#saveSettings').on('click', saveSettings);
        //var tipPercentSetting = localStorage.getItem('tipPercentage');
        //if (tipPercentSetting) {
        //    tipPercent = parseFloat(tipPercentSetting);
        //}
        //$('#tipPercentage').val(tipPercent);
    });

    $(document).on("deviceready", function () {
        StatusBar.overlaysWebView(false);
        StatusBar.backgroundColorByName("gray");
    });

}
)(jQuery);