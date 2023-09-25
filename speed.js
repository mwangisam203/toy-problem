function demeritPoints (speed) {
    const speedLimit = 70;
    //the speedLimit is 70
    const kmPerHour = 5;
    //any 5km/s above the speedLimit is one demeritPOint
    if(speedLimit<=70){
        console.log("ok")
        //speed between 70 and below prints ok
    
    }else 
    {const demeritPoints =Math.floor((speed - speedLimit)/5);
    //to get the total demeritPOints is the difference between the speed and speedLimit then divide by 5
    }if (demeritPoints>=12){
        console.log("License suspended");
        //12 points and above should print License suspended
    }else{
        console.log(`Points: ${demeritPoints}`);
    }


}
