/*    App Name - Tell Me Traffic Status
    If car running count is heigher and car stopping count is normal traffic is best.
    If car running count and car stopping count are same traffic is good.
    If car running count is lower and car stopping  count is heigher traffic is bad.
    If car running count and car stopping count are zero traffic is clean.
    Write a function to tell traffice condition.
*/

let trafficStatus = (runningCarCount, stoppingCarCount) => {
    if (runningCarCount > stoppingCarCount){
        return "Traffic is best!";
    } else if(runningCarCount == 0 && stoppingCarCount == 0){
        return "Traffic is clean!";
    } else if(runningCarCount == stoppingCarCount){
        return "Traffic is good!";
    } else if(runningCarCount < stoppingCarCount){
        return "Traffic is bad!"
    }
}

let tellTrafficStatus = (runningCarCount, stoppingCarCount) => {
    console.log(trafficStatus(runningCarCount,stoppingCarCount));
}

tellTrafficStatus(0,1);