'use strict';

console.log('\'Allo \'Allo! Content script');

// https://gist.github.com/dkniffin/b6f5dd4e1bde716e7b32#gistcomment-1980578
function toggle_visibility(data_id) {
    var matches = document.querySelectorAll(data_id);
    [].forEach.call(matches, function(e) {
        if(e.style.display == 'none') {
            e.style.display = 'table-cell';
        } else {
            e.style.display = 'none';
        }
    });
}

window.addEventListener ('load', myMain, false);

function myMain (evt) {
    var jsInitChecktimer = setInterval (checkForDomReady, 111);

    function checkForDomReady () {
        var selector = jQuery('#ghx-column-headers > li.ghx-column');
        if (selector) {
            selector
                .append('<a href="#" class="column-header-hider">Hide</a>')
                .click(function() {
                    var col = jQuery(this).data('id');
                    toggle_visibility('[data-id="'+col+'"]');
                    toggle_visibility('[data-column-id="'+col+'"]');
                });

            clearInterval(jsInitChecktimer);
        }
    }
}
