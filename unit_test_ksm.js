"use strict";
var KSM = require("./ksm").KSM;
var CosignSimilarity = require("./ksm").CosignSimilarity;
var data = {};

function setup() {
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let labels = s.split("");

    let centroid_count = 4;
    let dimensions = 3;
    let least = 1;
    let most = 100;

    data = {};
    for (var i in labels) {
        let vector = [];
        for (var j = 0; j < dimensions; j++) {
            vector[j] = rand(least, most);
        }
        let label = labels[i];
        data[label] = vector;
    }

    KSM.init(data, centroid_count, dimensions, least, most);
}

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

    a = [1, 2, 3, 4, 5, 6];
    b = [1, 2, 3, 4, 5, 6];
    let the_same = CosignSimilarity.findSimilarity(a, b);
    if (debug)
        say(" : the_same: " + the_same + " a: " + a + "    b: " + b);

    a = [1, 2, 3, 4, 5, 6];
    b = [1, 5, -2, 4, 5, 6];
    let somewhat_different = CosignSimilarity.findSimilarity(a, b);
    if (debug)
        say(" : somewhat_different: " + somewhat_different + " a: " + a + "    b: " + b);
    var isOk = true;
    isOk &= -1 == very_different;
    isOk &= 1 == the_same;
    isOk &= somewhat_different > 0.8 && somewhat_different < 0.9;

    a = [0, 0, 0, 0, 0, 0];
    b = [-1, 1, 0, 0, 0, 0];
    let pretty_different = CosignSimilarity.findSimilarity(a, b);
    if (debug)
        say(" : pretty_different: " + pretty_different + " a: " + a + "    b: " + b);

    var isOk = true == pretty_different == somewhat_different == the_same == very_different;
    log(isOk, "cosignSimilarity_test: vector cosign compare");


}

function say(message) {
    console.log("\t\t" + message);
}

function log(verdict, message) {
    let isOk = verdict ? "PASS" : "FAIL";
    console.log(isOk + "|" + message);
}

setup();
cosignSimilarity_test();
say("The end");