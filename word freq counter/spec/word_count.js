function words(str) {
    var arr = str.replace(/  +/g, ' ').split(/\s/);
    var occ = {};
    arr.forEach(function(w) {
        if (!occ.hasOwnProperty(w)) {
            occ[w] = 0;
        }
        occ[w] += 1;
    });

    return occ;
}