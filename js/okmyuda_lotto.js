/**
 * okmyuda_lotto
 * 
 * okmyuda@gmail.com
 * 
 * ver.190209
 */

$(document).ready(function() {
    setTable(makeRandTable(23, 1), 3); // 1 ~ 23
    setTable(makeRandTable(23, 23), 4); // 23 ~ 45
    setTable(makeRandTable(45, 1), 5); // 1 ~ 45
});

function setTable(randTable, lineNum) {
    for (let i = 0; i < 6; i++) {
        let id = "#num" + lineNum + "_" + (i+1);
        $(id).addClass(getColorByNum(randTable[i]));
        $(id).text(randTable[i]);
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
    let tmp;
    let randTable = [0, 0, 0, 0, 0, 0];

    while(1) {
        tmp = Math.floor((Math.random() * limitNum) + paddingNum);
        
        for (let i = 0; i < 6; i++) {
            if (randTable[i] === 0) {
                randTable[i] = tmp;
                break;
            }

            if (randTable[i] === tmp) {
                break;
            }
        }

        if (randTable[5] !== 0) {
            break;
        }
    }

    return randTable.sort((a, b) => {return a < b ? -1 : a > b ? 1 : 0;});
}