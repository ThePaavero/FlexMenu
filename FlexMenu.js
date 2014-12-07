(function ($) {

    $.fn.flexMenu = function () {

        var wrappingElement = this;
        var items;
        var buffer = 50;

        var availableWidth;
        var itemsAddedWidth;
        var currentMode = 'normal';

        var init = function () {

            items = wrappingElement.find('a').not('.nav-hamburger');
            itemsAddedWidth = getItemsAddedWidth();

            onChange();
            $(window).on('resize', onChange);
        };

        var setAvailableWidth = function () {

            availableWidth = wrappingElement.outerWidth();
        };

        var getItemsAddedWidth = function () {

            var added = 0;

            items.each(function () {
                var myWidth = $(this).outerWidth();
                added += myWidth;
            });

            return added;
        };

        var onChange = function () {

            setAvailableWidth();

            if (availableWidth > itemsAddedWidth + buffer) {
                if (currentMode === 'normal') {
                    return;
                }
                setMode('normal');
            } else {
                if (currentMode === 'reduced') {
                    return;
                }
                setMode('reduced');
            }
        };

        var setMode = function (mode) {

            if (mode === 'normal') {
                wrappingElement.removeClass('reduced');
                wrappingElement.addClass('normal');
            } else {
                wrappingElement.addClass('reduced');
                wrappingElement.removeClass('normal');
            }

            currentMode = mode;
        };

        init();
        return wrappingElement;
    };

})(jQuery);
