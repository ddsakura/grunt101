/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('mymojit', function(Y, NAME) {

/**
 * The mymojit module.
 *
 * @module mymojit
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function (ac) {
            ac.done({
                status: 'Mojito is working!.',
                data: {
                    some: 'Hello World!'
                }
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon']});
