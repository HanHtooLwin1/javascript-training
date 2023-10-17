function rightHalfNumberPyramid(startNumber){
    let i = 0;
    let assignValue = startNumber;
    let decreaseNumber = startNumber;
    
    while (i < startNumber) {
        console.log(assignValue + ","); // Output value
        decreaseNumber--;
        let m = 0;
        i++;
        assignValue = "";

        while(m <= i) {
            assignValue +=  String(decreaseNumber);
            m++;
        }
    }
}

rightHalfNumberPyramid(5);
