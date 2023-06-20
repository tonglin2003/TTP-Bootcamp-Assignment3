function reverseString(str)
{
    // possible solution: use javascript build in function, reverse()
    
    // js string is immutable, so we will need to split it into array
    let i = 0;
    let j = str.length - 1;
    copiedStr = str.split('');

    if (str.length < 2) return str;

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

function isPalindrome(str)
{
    // solution: if reversedStr === originStr, then it is palindrome, else false

    if (str === null || str.length < 1) return false;

    // reverse the str
    reversedStr = reverseString(str)

    //comapre the reversedStr and originStr
    return reversedStr === str;

}

module.exports = {reverseString, isPalindrome};