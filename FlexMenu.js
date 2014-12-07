(function ($) {

    $.fn.flexMenu = function (conf) {

        var settings = {
            itemSelector : conf.itemSelector || 'a',
            hamburgerSelector : conf.hamburgerSelector || '.nav-hamburger',
            bufferSize : conf.bufferSize || 30,
            classNameReduced : conf.classNameReduced || 'reduced'
        };

        var wrappingElement = this;
        var items;
        var buffer = settings.bufferSize;

        var availableWidth;
        var itemsAddedWidth;
        var currentMode = 'normal';

        var init = function () {

            items = wrappingElement.find(settings.itemSelector).not(settings.hamburgerSelector);
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
                wrappingElement.removeClass(settings.classNameReduced);
                wrappingElement.addClass('normal');
            } else {
                wrappingElement.addClass(settings.classNameReduced);
                wrappingElement.removeClass('normal');
            }

            currentMode = mode;
        };

        init();
        return wrappingElement;
    };

})(jQuery);
