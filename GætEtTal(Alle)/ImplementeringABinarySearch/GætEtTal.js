window.addEventListener("load", start);

function start() {
    console.log("JavaScript is running");

    binarySearch()
}

const values = [21,22,23,25,27,28,29,31,32,34,35];



function binarySearch( search, values ) { 
	// klar til kode!

    let min = 0;
    let middel = floor((max+min)/2)
    let max = values.length;
    
    let found = false; 
   
    while(!found && min <= max) {
        let middel = Math.floor((min+max)/2);
        let c = compare(search, values[middel]);
        
        console.log(`min: ${min}
            max: ${max}
            c: ${c}` );
        
       if(c == 0) {
        found = true
       }
       
       if(c > 0) {
        min = middel + 1;
       }

       if(c < 0)
        max = middel -1;
    } return -1

}

function compare(search, values.middel) {

    return value1 - value2;

}



