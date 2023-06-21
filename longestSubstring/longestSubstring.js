/*
possible solution: use sliding window. 
head = 0 (pointing toward the head of the subset), charSet = set(), maxLength = 0
    - loop through the str 
        - if currentChar is unique, then set+=char, and compare current setSize (current subset length)
        to the maxLength
        - else if currentChar is duplicated, then head++ and remove current head value from the set
            repeat the process until our set has no duplicate
*/

function longestSubstring(str)
{
    let charSet = new Set();
    let head = 0;
    let maxLength = 0;

    for (let i = 0; i < str.length; i++)
    {
        if (!(charSet.has(str[i])))
        {
            charSet.add(str[i]);
            maxLength = Math.max(charSet.size, maxLength);
        }
        else
        {
            while (str[head] !== str[i])
            {
                charSet.delete(str[head]);
                head++;
            }
            head++;
        }
    }
    return maxLength;
    
}

console.log(longestSubstringWithoutRepeatingCharacters("pwwkew"));
console.log(longestSubstringWithoutRepeatingCharacters("bbbbb"));
console.log(longestSubstringWithoutRepeatingCharacters("dvdf"));
console.log(longestSubstringWithoutRepeatingCharacters("abcabcbb"));

module.export = longestSubstring;


