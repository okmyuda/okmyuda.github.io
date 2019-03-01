/**
 * okmyuda_fibonacci
 * 
 * okmyuda@gmail.com
 * 
 * ver.190301
 */

var ratios = [0, 0.236, 0.382, 0.5, 0.618, 0.705, 0.786, 1, 1.618];

$(document).ready(function() {

});

function clickBtnCalculate() {
    setTable($("#costStart").val(), $("#costEnd").val()); 
};

function setTable(startCost, endCost) {
    let isAscend = startCost < endCost;
    let costs = calcCost(isAscend, startCost, endCost);

    for (let i = 1; i < 10; i++) {
        let ratio = "#ratio" + i;
        let cost = "#cost" + i;

        if (isAscend) {
            $(ratio).text(ratios[i - 1]);
            $(cost).text(costs[i - 1]);
        } else {
            $(ratio).text(ratios[9 - i]);
            $(cost).text(costs[i - 1]);
        }
    }
}

function calcCost(isAscend, startCost, endCost) {
    let maxCost, minCost;

    if (isAscend) {
        maxCost = Number(endCost);
        minCost = Number(startCost);
    } else {
        maxCost = Number(startCost);
        minCost = Number(endCost);
    }

    let costs = [];
    let diff = maxCost - minCost;

    if (isAscend) {
        costs[0] = maxCost;
        costs[1] = maxCost - (diff * 0.236);
        costs[2] = maxCost - (diff * 0.382);
        costs[3] = maxCost - (diff * 0.5);
        costs[4] = maxCost - (diff * 0.618);
        costs[5] = maxCost - (diff * 0.705);
        costs[6] = maxCost - (diff * 0.786);
        costs[7] = minCost;
        costs[8] = maxCost - (diff * 1.618);
    } else {
        costs[0] = maxCost + (diff * 0.618);
        costs[1] = maxCost;
        costs[2] = maxCost - (diff * (1 - 0.786));
        costs[3] = maxCost - (diff * (1 - 0.705));
        costs[4] = maxCost - (diff * (1 - 0.618));
        costs[5] = maxCost - (diff * (1 - 0.5));
        costs[6] = maxCost - (diff * (1 - 0.382));
        costs[7] = maxCost - (diff * (1 - 0.236));
        costs[8] = minCost;
    }

    return costs;
}