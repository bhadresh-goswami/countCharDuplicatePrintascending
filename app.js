function removeduplicates(inputData) {

    var charArr = inputData.split('');
    var strArr = [];
    var output = [];

    strArr = charArr.map((ele) => {
        return ele.toLowerCase();
    });

    strArr = strArr.filter((ele) => {
        var code = ele.charCodeAt(0);
        return (code >= 61 && code <= 122);
    });


    for (let i = 0; i < strArr.length; i++) {
        const element = strArr[i];
        var c = 0;

        for (let j = i; j < strArr.length; j++) {
            const inelement = strArr[j];
            if (element == inelement) {
                strArr[j] = ' ';
                c++;
            }
        }
        var obj = {
            'ch': element,
            'c': c
        };
        output.push(obj);
    }

    output = output.filter((ele) => {
        var code = ele['ch'].charCodeAt(0);
        return (code >= 61 && code <= 122) && ele['c']>1;
    });

    output.sort(
        (a, b) => {
            if (a['ch'] > b['ch']) {
                return 1;
            } else if (a[['ch']] < b['ch']) {
                return -1;
            }
            return 0;
        })


    var str = "";
    for (let i = 0; i < output.length; i++) {
        const element = output[i];
        str += `${element.ch} ${element.c}\n`;

    }

    console.log(str);
    return str;
}

removeduplicates('The quick brown fox jumped over the lazy dog.');
