"use strict";
/* K-Shift-Means  */
function say(s) {
    console.log(":\t" + s);
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

    move: function() {
        // rebase
        for (var key in this.centroids) {
            this.centroids[key].zeroOut();
        }

        // tell each node where the closest controid is to it
        for (var key in this.data) {
            var id_distance = this.findClosestCentroid(this.data[key]);
            let id = id_distance["id"];
            let distance = id_distance["distance"];
            let id2 = id_distance["id2"];
            let distance2 = id_distance["distance2"];

            this.data[key].setCentroid(id, distance);
            this.data[key].setCentroid2(id2, distance2);


//console.log("ICHI " + id + "  |   " + id2 + "    d | " + distance + "    | "  + distance2); 
//console.log("  NI " +  this.data[key].centroidId + " " + this.data[key].nextCentroidId + " d " + this.data[key].distance + "   | " + this.data[key].nextDistance);


            //say(key + "  " + id + "   " + distance )
        }

        // Step1: Prep to move each centroid to the new eigen_center...
        // I.e. zero set the .vector space
        for (var key in this.centroids) {
            this.centroids[key].zeroOutVectorLocation();
        }

        // Step2: Add up all a centroid's member's vector spaces
        for (var key in this.data) {
            var id = this.data[key].centroidId;
            this.centroids[id].donateVector(this.data[key].vector, key);
        }

        // Step3: Move! Divide the vector spaces by the number of donations
        // to find the ave location. Set the centroid's vector to that.
        let delete_these = [];
        for (var key in this.centroids) {
            this.centroids[key].findVectorAverage();
            if (  this.centroids[key].memberIds.length < 6) {
                delete_these.push(key);
            }
        }

        for ( var index in delete_these) {
            var key = delete_these[index];
            delete this.centroids[key];
        }

    },

    init: function(incoming_data, number_of_centroids, ranges) {
        say("point count: " + len(incoming_data));
        say("dimensions: " + ranges.length);

        this.data = {};
        for (var key in incoming_data) {
            this.data[key] = new Vector(key);
            this.data[key].vector = incoming_data[key];
        }
        this.centroids = {};
        for (var i = 0; i < number_of_centroids; i++) {
            this.centroids[i] = new Vector(i);

            var vector = [];
            for (var j = 0; j < ranges.length; j++) {
                let min = 0;
                let max = ranges[j] + 1; // just a little overlap
                let result = Math.random() * (max - min) + min;
                vector[j] = result;
            }
            this.centroids[i].vector = vector;
        }
        for (var i = 0; i < 2; i++) {
            let thisTime = [];
            this.move();


            //for (var key in this.centroids) {
            //    console.log(this.centroids[key].describe() + "\t\t" + this.centroids[key].memberIds.length);
            //}
            //console.log("...");
        }

        this.showResults();
    },

    showResults: function() {
        console.log("SECONDARY ---------------"); 
  
        var secondCentroids ={}; 
        for (var key in this.data) {
            var id = this.data[key].nextCentroidId;
            if ( ! secondCentroids.hasOwnProperty(id)) {
                secondCentroids[id] = [];
            }
            secondCentroids[id].push(key);
            //console.log(id + "   and  " + key ); 
        }
        for ( var key in secondCentroids) {
            var ary = secondCentroids[key];
            //console.log("SECONDN:" + key + "  |   "  + ary);
            let sql = "update feedback set centroid2=" + key + " where rowid in (" + ary + ");"; 
            console.log(sql);
            console.log(key + "   |   "+ ary.length );
        }




        console.log("PRIMARY ---------------"); 
        var count = 0;
        for (var key in this.centroids) {
            
            if ( this.centroids[key].memberIds.length > 0 ){
                let ary = this.centroids[key].memberIds;
                //say(i + "   " + key + "    " + ary.length);
                count += ary.length;
                let sql = "update feedback set centroid1=" + key + " where rowid in (" + ary + ");"; 
                console.log(sql);
                console.log(this.centroids[key].memberIds.length + "   | " + this.centroids[key].describe() + " ");
            }
        }
        say("Clustered " + count + " into " + len(this.centroids) + " clusters");
        say("The end");
    },
    findClosestCentroid: function(datum) {
        var distance = 1000000;
        var id = "undefined";
        var id2 = "undefined";
        var id_distance = {};
        for (var key in this.centroids) {
            let c = this.centroids[key];
            let d = CosignSimilarity.findSimilarity(datum.vector, c.vector);
            if ( id_distance.hasOwnProperty(d)) {
                // do nothing
            } else {
                id_distance[d] = c.id;
            }
            id_distance[d] = c.id; 
//            if (d < distance) {
//                distance = d;
//                id = c.id;
//            }
        }
        var keys = []; 
        for ( var key in id_distance) {
            keys.push(key);
        }
        keys.sort();



        var id1 = id_distance[keys[0]];
        var id2 = id_distance[keys[1]];
        var distance1 = keys[0];
        var distance2 = keys[1];


//        console.log("id1 " + id1 + "  id2 " + id2 + "     d1 " + distance1 + "   d2 " + distance2 );

        return {
            "id": id1,
            "distance": distance1,
            "id2": id2,
            "distance2": distance2
        };

//        return {
//            "id": id,
//            "distance": distance
//        };
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

Vector.prototype.zeroOutVectorLocation = function() {
    for (var index in this.vector) {
        this.vector[index] = 0;
    }
    this.memberIds = [];
}

Vector.prototype.donateVector = function(v, id) {
    for (var i = 0; i < v.length; i++) {
        this.vector[i] += v[i];
    }
    this.memberIds.push(id);
}
Vector.prototype.findVectorAverage = function() {
    for (var i = 0; i < this.vector.length; i++) {
        var before = this.vector[i];
        this.vector[i] /= this.memberIds.length;
        //console.log("FVA: " + before + "    " + this.vector[i] + " and " + this.memberIds.length); 
    }
}
Vector.prototype.addInfo = function(location) {
    this.vector.push(location);
}

Vector.prototype.describe = function() {
    let out = this.id + " | ";
    for (let i in this.vector) {
        out += this.vector[i].toFixed(1) + " |      "; // + this.vector.length;
    }
    return out;
}
Vector.prototype.zeroOut = function() {
    this.nearestId = "";
    this.nearest = 100;
    this.centroidId = "";
    this.distance = -1;
    this.nextCentroidId = "";
    this.nextDistance = -1;
}

Vector.prototype.setCentroid2 = function(cid, distance) {
    // 2ndclosest
    if ( cid != this.centroidId) {
        this.nextCentroidId = cid;
        this.nextDistance = distance;
    }
}

Vector.prototype.setCentroid = function(cid, distance) {
    // closest
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