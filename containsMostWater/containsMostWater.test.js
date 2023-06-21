function containsMostWater(height)
{
    var maxArea = 0;
    var left = 0; 
    var right = height.length - 1;

    while (left < right)
    {
        // calculate the current area, meanwhile move the pointer with lower value to find other areas
        if (height[left] < height[right])
        {
            var currArea = height[left] * (right - left);
            left++;
        }
        else
        {
            var currArea = height[right] * (right-left);
            right--;
        }
        // compare the area, and find the higher one
        maxArea = Math.max(maxArea, currArea);
        
    }
    return maxArea;
}

module.export = containsMostWater;