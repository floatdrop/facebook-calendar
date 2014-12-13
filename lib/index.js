/* global window, global */

"format global";
"exports layOutDay";

(function(global) {
    global.layOutDay = function () {
        console.log('123!');
    };
})(typeof window !== 'undefined' ? window : global);
