function removeduplicates(inputData) {

    //split the string char in array
    var charArr = inputData.split('');
    var strArr = [];
    var output = [];


    //convert each char in small case
    for (let index = 0; index < charArr.length; index++) {
        const element = charArr[index];
        charArr[index] = element.toLowerCase();
        if (charArr[index] != ' ') {
            strArr.push(charArr[index]);
        }
    }

    //loop will find the array char count
    for (let i = 0; i < strArr.length; i++) {
        //store char and will check with other char in array
        const element = strArr[i];
        var c = 0;

        //inner loop that execute and match the one char to all other in loop
        //from start next char in array j = i
        for (let j = i; j < strArr.length; j++) {
            const inelement = strArr[j];
            if (element == inelement) {
                //if element found than need to remove from list so not
                //come again in counting so replaced it to space
                strArr[j] = ' ';
                //count will incresed +1 if element found
                c++;
            }
        }
        //if element is the space then no need to consider in output
        //if count 1 than also no need to add it in the output
        if (element == " " || c == 1) {
            continue;
        }

        //create an object to store values
        
        var obj = {
            'ch': element,
            'c': c
        };
        output.push(obj);
        //output+= `${element} ${c}\n`;
    }
    
    //need to sort element in char wise asc order
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
    //convert that object in string and return
    for (let i = 0; i < output.length; i++) {
        const element = output[i];
        str += `${element.ch} ${element.c}\n`;

    }

    console.log(str);
    return str;
}

removeduplicates('The quick brown fox jumped over the lazy dog.');
