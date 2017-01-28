"use strict";
/* K-Shift-Means  */
function say(s) {
    console.log(":\t" + s);
}

function randomVector(n, min, max) {
    var a = [];
    for (var i = 0; i < n; i++) {
        a[i] = Math.random() * (max - min) + min;
    }
    return a;
}

function emptyVector(n) {
    var a = [];
    for (var i = 0; i < n; i++) {
        a[i] = 0;
    }
    return a;
}

function len(map) {
    let count = 0;
    for (var key in map) {
        count++;
    }
    return count;
}
var KSM = {

    rebase: function() {
        for (var key in this.centroids) {
            this.centroids[key].zeroOut();
        }
    },

    findAverages: function(centroid) {
        var totals = emptyVector(this.number_of_dimensions);

        for (var memberid in centroid.memberIds) {
            let lookupKey = centroid.memberIds[memberid];
            let d = this.data[lookupKey];

            for (var i = 0; i < this.number_of_dimensions; i++) {
                totals[i] += d.vector[i];
            }
        }
        for (var i = 0; i < this.number_of_dimensions; i++) {
            totals[i] /= centroid.memberIds.length;
        }
        centroid.vector = totals;
    },

    move: function() {

        for (var j = 0; j < 13; j++) {
            this.rebase();
            for (var i = 0; i < 1; i++) {
                for (var key in this.data) {
                    this.findClosestCentroid(this.data[key]);
                    this.centroids[this.data[key].centroidId].addNode(key);
                }
            }

            let count = len(this.centroids);
            for (var key in this.centroids) {
                if (this.centroids[key].memberIds.length < 5) {
                    delete this.centroids[key];
                } else {
                    //say(this.centroids[key].describe() + "   members: " + this.centroids[key].memberIds.length);
       //             say( j + "\t" + key + "\t" + this.centroids[key].memberIds.length);
                    var totals = this.findAverages(this.centroids[key]);
                }
            }
            say( j + " ...");
        }


            for (var key in this.centroids) {
            	var out = "";
            	for ( var i = 0 ; i < this.centroids[key].memberIds.length; i++) {

            		out += this.centroids[key].memberIds[i] + ",";
       //             say( j + "\t" + key + "\t" + this.centroids[key].memberIds.length);
       //             var totals = this.findAverages(this.centroids[key]);
                }
                console.log( "update feedback set topic = '" + key + "' where rowid in (" + out + ")"); 
            }






    },
    init: function(data, number_of_centroids, number_of_dimensions, min, max) {
		//for ( var key in data ) {
    	//	say(key + " | " + data[key]);
    	//}
		//say(".....................");

        this.number_of_centroids = number_of_centroids;
        this.number_of_dimensions = number_of_dimensions;
        this.data = {};
        this.centroids = {};
        for (var key in data) {
            this.data[key] = new Vector(key);
            this.data[key].vector = data[key];
        }
        for (var i = 0; i < number_of_centroids; i++) {
            this.centroids[i] = new Vector(i);
            var a = randomVector(number_of_dimensions, min, max);
            this.centroids[i].vector = a;
        }
        this.move();
    },
    findClosestCentroid: function(point_in_hyperplane) {
        var distance = 1000000;
        var id = "undefined";
        for (var key in this.centroids) {
            let c = this.centroids[key];
            let d = CosignSimilarity.findSimilarity(point_in_hyperplane.vector, c.vector);
            //say( point_in_hyperplane.vector + "   and " + c.vector); 
            if (d < distance) {
                distance = d;
                id = c.id;
            }
        }
        point_in_hyperplane.setCentroid(id, distance);
    }
}

var CosignSimilarity = {
    divideByZeroPad: function(a) {
        let isAllZeros = true;
        for (let index in a) {
            if (a[index] !== 0) {
                isAllZeros = false;
            }
        }
        if (isAllZeros) {
            a[0] += 0.0001;
        }
        return a;
    },
    findSimilarity: function(a, b) {
        //a[0] += 0.000001; // avoid potential divide by zero issues
        a = this.divideByZeroPad(a);
        b = this.divideByZeroPad(b);

        var dotProduct = 0.0;
        var magnitude1 = 0.0;
        var magnitude2 = 0.0;
        var cosineSimilarity = 0.0;

        var control = []; //new double[a.length];
        var vector = []; //new double[b.length];
        for (var i = 0; i < a.length; i++) {
            control[i] = a[i];
            vector[i] = b[i];
        }

        for (var i = 0; i < control.length; i++) {
            dotProduct += control[i] * vector[i]; // a.b
            magnitude1 += Math.pow(control[i], 2); // (a^2)
            magnitude2 += Math.pow(vector[i], 2); // (b^2)
        }

        magnitude1 = Math.sqrt(magnitude1); // sqrt(a^2)
        magnitude2 = Math.sqrt(magnitude2); // sqrt(b^2)

        if (magnitude1 != 0.0 | magnitude2 != 0.0) {
            cosineSimilarity = dotProduct / (magnitude1 * magnitude2);
        } else {
            return 0;
        }
        cosineSimilarity += 1; //was ranging from -1 to 1...   now it will range from 0 to 2
        let result = 2 - cosineSimilarity;
        return result; //'2' will mean maximally different. '0' will mean 'the same'
    }
}

var Vector = function(id) {
    this.id = id;
    this.vector = [];
    this.nearestId = "";
    this.nearest = 100;
    this.centroidId = "";
    this.distance = -1;
    this.nextCentroidId = "";
    this.nextDistance = -1;
    this.memberIds = [];
}

Vector.prototype.addInfo = function(location) {
    this.vector.push(location);
}

Vector.prototype.describe = function() {
    let out = this.id + " | ";
    for (let i in this.vector) {
        out += this.vector[i].toFixed(2) + " |      "; // + this.vector.length;
    }
    return out;
}
Vector.prototype.zeroOut = function() {
    this.nearestId = "";
    this.nearest = 100;
    //	this.vector = [];
    this.centroidId = "";
    this.distance = -1;
    this.nextCentroidId = "";
    this.nextDistance = -1;
    this.memberIds = [];
}

Vector.prototype.setCentroid = function(cid, distance) {
    if (cid != this.centroidId) {
        this.nextCentroidId = this.centroidId;
        this.nextDistance = this.distance;
    }
    this.centroidId = cid;
    this.distance = distance;
}

Vector.prototype.addNode = function(memberId) {
    this.memberIds.push(memberId);
}

Vector.prototype.showMembers = function() {
    let out = "Centroid " + this.id + " with " + this.memberIds.length + " members";
    let debug = true;
    if (this.memberIds.length > 0 && debug) {
        out += "\n";
        for (var i in this.memberIds) {
            out += this.memberIds[i] + "\n";
        }
    }
    return out;
}



try {
    /* Exports for testing, because node. When in actual use this will be called from a webpage - not via node */
    module.exports.KSM = KSM;
    module.exports.CosignSimilarity = CosignSimilarity;
	module.exports.Vector = Vector;
	module.exports.len = len;

} catch (error) {
    console.log("Error: " + error);
}
