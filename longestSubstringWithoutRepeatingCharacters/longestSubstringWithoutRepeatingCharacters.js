/*
psuedo: 
highestCount = 0
for char in str:
    if dict['c'] not set:
        uniqueLettercount++
    else:
        highestCount = max(highestCount,uniqueLettercount);
        dict = {} // refresh
        uniqueLettercount = 1

return highestCount

// what if I let repeat char to stay 1, and uniqueletter stay the same
*/

function longestSubstringWithoutRepeatingCharacters(str)
{
    let highestCount = 0;
    let charDict = {};
    let uniqueLettercount = 0;

    for (let char of str)
    {
        if (!(char in charDict))
        {
            uniqueLettercount++;
            charDict[char] = 1;
        }
        // else
        // {
        //     highestCount = Math.max(highestCount, uniqueLettercount);
        //     charDict = {}; // empty the dictionary
        //     charDict[char] = 1;
        //     uniqueLettercount = 1; // restart the count
        // }
    }
    return uniqueLettercount;
}

console.log(longestSubstringWithoutRepeatingCharacters("pwwkew"));
// console.log(longestSubstringWithoutRepeatingCharacters("bbbbb"));
// console.log(longestSubstringWithoutRepeatingCharacters("dvdf"));

// what if we saw a repeating letter, we just [char]--