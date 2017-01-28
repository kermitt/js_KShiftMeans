"use strict";
var KSM = require("./ksm").KSM;
var CosignSimilarity = require("./ksm").CosignSimilarity;
var Vector = require("./ksm").Vector;
var len = require("./ksm").len;
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

function detectDelta_test() {

	// fake set up what the centroids map looks like at time 'before'

	var v1 = new Vector("one");
	v1.addNode("a");
	v1.addNode("b");
	v1.addNode("c");

	var v2 = new Vector("two");
	v2.addNode("d");
	v2.addNode("e");
	v2.addNode("f");

	var map_at_loop1 = {};
	map_at_loop1["one"] = v1;
	map_at_loop1["two"] = v2;

	var map_at_loop2 = {};
	map_at_loop2["one"] = v1;
	map_at_loop2["two"] = v2;

	var expected_result = true; // loop1 and loop2 are the same

	function mapsHaveDelta(map1, map2) {
		var delta = false;

		if ( len(map_at_loop1) != len(map_at_loop2)) {
			return true;
		} 	

		
	}

expected_result = mapsHaveDelta(map_at_loop1,map_at_loop2);


	say("one: " + len(map_at_loop1));
	say("two: " + len(map_at_loop2));
	// fake set up what the centroids map looks like at time 'after'


	say(v1.showMembers());
	log(expected_result, "detectDelta_test");
}

setup();
cosignSimilarity_test();

detectDelta_test();

say("The end");