/**
 * okmyuda_cwc
 * 
 * okmyuda@gmail.com
 * 
 * ver.190418
 */

$(document).ready(function() {
    //   $("#chk1").addClass(checked);
    initChkBox();

});

function initChkBox() {

    for (let i = 1; i < 46; i++) {
        $("input:checkbox[name='chk" + i + "']").prop("checked", false);
    }

    let initTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    while (1) {
        let randNum = Math.floor((Math.random() * (44)) + 1);

        for (let i = 0; i < initTable.length; i++) {

            if (initTable[i] === 0) {
                initTable[i] = randNum;
                break;
            }

            if (initTable[i] === randNum) {
                break;
            }
        }

        if (initTable[19] != 0) {
            break;
        }
    }

    for (let i = 0; i < initTable.length; i++) {
        $("input:checkbox[name='chk" + initTable[i] + "']").prop("checked", true);
    }
}

function bbobgi() {
    let table = getChkBox();

    setTable(makeRandTable(table), 1);
    setTable(makeRandTable(table), 2);
    setTable(makeRandTable(table), 3);
    setTable(makeRandTable(table), 4);
    setTable(makeRandTable(table), 5);
}

function makeRandTable(sourceTable) {
    let randNum;
    let randTable = [0, 0, 0, 0, 0, 0];

    while (1) {
        randNum = Math.floor((Math.random() * (sourceTable.length)));

        for (let i = 0; i < 6; i++) {
            if (randTable[i] === 0) {
                randTable[i] = sourceTable[randNum];
                break;
            }

            if (randTable[i] === sourceTable[randNum]) {
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

function getChkBox() {
    let chkedNum = [];
    let idx = 0;

    for (let i = 1; i < 46; i++) {
        if ($("input:checkbox[name='chk" + i + "']").is(":checked")) {
            chkedNum[idx++] = i;
        }
    }

    return chkedNum;
}

function setTable(numTable, lineNum) {
    for (let i = 0; i < 6; i++) {
        let id = "#num" + lineNum + "_" + (i + 1);
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