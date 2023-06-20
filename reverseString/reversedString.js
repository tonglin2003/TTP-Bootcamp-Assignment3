function reversedString(str)
{    
    if (str === null || str.length < 2 ) return str;

    // js string is immutable, so we will need to split it into array
    let i = 0;
    let j = str.length - 1;

    // used copiedStr so the original str won't be changed
    copiedStr = str.split('');

    // reversing the str through swaping the two pointers
    while (i < j)
    {
        let temp = copiedStr[i];
        copiedStr[i] = copiedStr[j];
        copiedStr[j] = temp;
        j--;
        i++;
    }

    // return the joined str so it doesn't return array
    return copiedStr.join('');
}

module.exports = reversedString;