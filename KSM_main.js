"use strict";

var fs = require('fs');
var KSM = require("./ksm").KSM;

fs.readFile('data.psv', 'utf8', function(err, data) {

    var map = {};

    if (err) {
        console.log(err)
    } else {
        var lines = data.split("\n");
        for (var i in lines) {

            var line = lines[i];
            if (line != undefined && line.length > 0) {
                var row = line.split("|");

                let ith = parseInt(row[0]);
                let id = parseInt(row[1]);
                let find = parseInt(row[2]);
                let use = parseInt(row[3]);
                let expect = parseInt(row[4]);
                let tools = parseInt(row[5]);
                let loads = parseInt(row[6]);
                let frq = parseInt(row[7]);
                let gender = parseInt(row[8]);
                let age = parseInt(row[9]);

                map[id] = [find, use, expect, tools, loads, frq, gender, age];
            }
        }
        doClustering(map);
    }
});

function doClustering(data) {
    let centroid_count = 10;

    let find_max = 5;
    let use_max = 5;
    let expect_max = 5;
    let tools_max = 5;
    let load_max = 5;
    let gender_max = 2;
    let frq_max = 6
    let age_max = 8;
    let ranges = [find_max, use_max, expect_max, tools_max, load_max, gender_max, frq_max, age_max];

    KSM.init(data, centroid_count, ranges);
}