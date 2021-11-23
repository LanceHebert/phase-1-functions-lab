
// Code your solution in this file!
function distanceFromHqInBlocks(input)
{
    let blocks = 0;
    if (input >= 42)
    {
    blocks = input - 42; 
    return blocks;  
    }
    else
    {
    const blocks = 42 - input;
    return blocks;
    }          
}

function distanceFromHqInFeet(input)
{
   const blockFeet = distanceFromHqInBlocks(input) * 264;
   return blockFeet;
}

function distanceTravelledInFeet(north,south)
{
    const travelled = Math.abs(north - south) * 264;
    return travelled;
}

function calculatesFarePrice(north, south)
{
    let fare = 0;
    const distance = distanceTravelledInFeet(north,south);
    if(distance > 2500)
    {
        return "cannot travel that far";
    }
    else
    {
        if(distance < 400)
        {
           return fare = 0;
        }
        else if ((distance - 400) > 0 && distance < 2000)
        {
           return fare = (distance - 400) * 0.02; 
        }
        else
        {
           return fare = 25;
        }
    }    
}