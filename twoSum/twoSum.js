function twoSum(arr, target)
{
    if (arr.length < 2) return -1;

    let numDict = {};

    for (let i = 0; i < arr.length; i++)
    {
        let need = target - arr[i];

        if (need in numDict)
        {
            return [numDict[need], i];
        }
        else
        {
            numDict[arr[i]] = i;
        }
    }

    return -1;
}

module.exports = twoSum;