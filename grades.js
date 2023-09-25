function calculateGrade(){
    const input = prompt("Enter students marks (0-100);")
    const marks = parseFloat(input)
    //total marks based on grades adds up to 100
    if (marks>=0 &&marks<=100) {
        let grade;
        if (marks>=79&&marks<=100) {
            grade="A";
            //any marks from 100 to 79 counts as "A"
        }else if(marks>=60&&marks<=79){
            grade="B";
            //marks below 79 but above 60 is "B"
        }else if(marks>=49&&marks<=59){
            grade="C";
            //marks betwen 49 and 59 counts as "C"
        }else if(marks>=40&&marks<=49){
            grade="D";
            //below 49 marks but above 40 is grade "D"
        }else {
            grade="E"
        }
           console.log(`The student's grade ${grade}`)
    }
}
       calculateGrade(); 
    