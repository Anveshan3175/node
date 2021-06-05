// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'scripts',
    paths: {
        app: 'app/app',
        cube:'app/cube',
        calculator:'app/calculator',
        calculatorleak :'app/calculator-leak',
        jquery : 'lib/jquery-3.6.0.min',
        square : 'app/square'
    },
    shim: {
        'square': {
            deps: ['calculator','calculatorleak'],   // This ensures calculator is loaded before square
            exports : 'square'
        }
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app']);