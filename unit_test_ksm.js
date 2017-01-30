"use strict";
var CosignSimilarity = require("./ksm").CosignSimilarity;

function cosignSimilarity_test() {
    var debug = false;
    let a = [1, 2, 3, 4, 5, 6];
    let b = [-1, -2, -3, -4, -5, -6];
    let very_different = CosignSimilarity.findSimilarity(a, b);
    if (debug)
        say(" : very_different: " + very_different + " a: " + a + "    b: " + b);

    a = [1, 2, 3, 4, 5, 6];
    b = [1, 2, 3, 4, 5, -6];
    let less_different = CosignSimilarity.findSimilarity(a, b);
    if (debug)
        say(" : less_different: " + less_different + " a: " + a + "    b: " + b);
    a = [0, 0, 0, 0, 0, 0];
    b = [-1, 1, 0, 0, 0, 0];
    let pretty_different = CosignSimilarity.findSimilarity(a, b);
    if (debug)
        say(" : pretty_different: " + pretty_different + " a: " + a + "    b: " + b);

    a = [1, 2, 3, 4, 5, 6];
    b = [1, 5, -2, 4, 5, 6];
    let somewhat_different = CosignSimilarity.findSimilarity(a, b);
    if (debug)
        say(" : somewhat_different: " + somewhat_different + " a: " + a + "    b: " + b);

    a = [1, 2, 3, 4, 5, 6];
    b = [1, 2, 3, 4, 5, 6];
    let the_same = CosignSimilarity.findSimilarity(a, b);
    if (debug)
        say(" : the_same: " + the_same + " a: " + a + "    b: " + b);

    var isOk = false;
    if ( very_different > the_same ) {
    	isOk = true;
    }
    log(isOk, "cosignSimilarity_test: vector cosign compare");
}

function say(message) {
    console.log("\t\t" + message);
}

function log(verdict, message) {
    let isOk = verdict ? "PASS" : "FAIL";
    console.log(isOk + "|" + message);
}
cosignSimilarity_test();
say("The end");