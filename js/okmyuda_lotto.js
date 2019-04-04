/**
 * okmyuda_lotto
 * 
 * okmyuda@gmail.com
 * 
 * ver.190404
 */

 // ~852
 var mostTable = [1, 13, 27, 33, 34, 43];
 var lessTable = [9, 22, 23, 29, 32, 41];
 var frontTable = makeRandTable(23, 1); // 1 ~ 23
 var backTable = makeRandTable(23, 23); // 23 ~ 45
 var otherTable = [2, 3, 4, 5, 6, 7, 8, 10,
                   11, 12, 14, 15, 16, 17, 18, 19, 20,
                   21, 22, 24, 25, 26, 28, 30,
                   31, 35, 36, 37, 38, 39, 40,
                   42, 44, 45];

 $(document).ready(function() {
    setTable(mostTable, 1);
    setTable(lessTable, 2);
    setTable(frontTable, 3);
    setTable(backTable, 4);

    otherTableCorrection(frontTable);
    otherTableCorrection(backTable);
    setTable(makeOtherRandTable(), 5);
});

function setTable(numTable, lineNum) {
    for (let i = 0; i < 6; i++) {
        let id = "#num" + lineNum + "_" + (i+1);
        $(id).addClass(getColorByNum(numTable[i]));
        $(id).text(numTable[i]);
    }
}

function getColorByNum(num) {
    if (1 <= num && num < 11) {
        return "yellow";
    }

    if (11 <= num && num < 21) {
        return "blue";
    }

    if (21 <= num && num < 31) {
        return "pink";
    }

    if (31 <= num && num < 41) {
        return "grey";
    }

    return "green";
}

function makeRandTable(limitNum, paddingNum) {
    let randNum;
    let randTable = [0, 0, 0, 0, 0, 0];

    while(1) {
        randNum = Math.floor((Math.random() * limitNum) + paddingNum);
        
        for (let i = 0; i < 6; i++) {
            if (randTable[i] === 0) {
                randTable[i] = randNum;
                break;
            }

            if (randTable[i] === randNum) {
                break;
            }
        }

        if (randTable[5] !== 0) {
            break;
        }
    }

    return randTable.sort(function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    });
}

function otherTableCorrection(removeTable) {
    for (let i = 0; i < 6; i++) {
        if (otherTable.indexOf(removeTable[i]) != -1) {
            otherTable.splice(otherTable.indexOf(removeTable[i]), 1);
        }
    }
}

function makeOtherRandTable() {
    let randNum;
    let randTable = [0, 0, 0, 0, 0, 0];

    while(1) {
        randNum = Math.floor((Math.random() * otherTable.length) + 1);
        for (let i = 0; i < 6; i++) {
            if (randTable[i] === 0) {
                randTable[i] = otherTable[randNum];
                break;
            }

            if (randTable[i] === otherTable[randNum]) {
                break;
            }
        }

        if (randTable[5] !== 0) {
            break;
        }
    }

    return randTable.sort(function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    }); 
}