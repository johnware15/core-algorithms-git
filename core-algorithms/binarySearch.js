//binarySearch

export default function binarySearch(numbers) {
    const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    function binarySearch(items, value){

    var startIndex  = 0,
        stopIndex   = items.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);

    while(items[middle] != value && startIndex < stopIndex){

        //adjust search area
        if (value < items[middle]){
            stopIndex = middle - 1;
        } else if (value > items[middle]){
            startIndex = middle + 1;
        }

        //recalculate middle
        middle = Math.floor((stopIndex + startIndex)/2);
    }

    //make sure it's the right value
    return (items[middle] != value) ? -1 : middle;
}
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
alert(binarySearch(items, 45));    

}
