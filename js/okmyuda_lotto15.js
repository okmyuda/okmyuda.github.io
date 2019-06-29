/**
 * okmyuda_lotto
 * 
 * okmyuda@gmail.com
 * 
 * ver.190629
 */

 var tableOne = makeRandTable(1, 16); // 1 ~ 15
 var tableTwo = makeRandTable(16, 31); // 16 ~ 30
 var tableThree = makeRandTable(31, 46); // 31 ~ 45
 var tableFour = makeRandTable(1, 46); // 1 ~ 45
 var tableFive = makeRandTable(10, 41); // 10 ~ 40

 $(document).ready(function() {
    setTable(tableOne, 1);
    setTable(tableTwo, 2);
    setTable(tableThree, 3);
    setTable(tableFour, 4);
    setTable(tableFive, 5);
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

function makeRandTable(min, max) {
    let randNum;
    let randTable = [0, 0, 0, 0, 0, 0];

    while(1) {
        randNum = Math.floor((Math.random() * (max - min)) + min);
        
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