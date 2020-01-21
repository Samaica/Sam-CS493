let student = {
    name : "Sam",
    lastname : "Brown",
    courses : [{
        course_name : "Computer Science I",
        course_number : "CS 172"
    },
    {
        course_name : "Computer Science II",
        course_number : "CS 292"
    },
    {
        course_name : "Algorithms and Data Structures",
        course_number : "CS 341"
    },
    {
        course_name : "Software Development",
        course_number : "CS 381"
    },
    {
        course_name : "Assembly Language Programming",
        course_number : "CS 397"
    }],

    music : [{
        song : "Red Room ",
        artist : "Offset ",
        genre : "Rap "
    },
    {
        song : "Blank Space ",
        artist : "Taylor Swift ",
        genre : "Pop "
    },
    {
        song : "Fever ",
        artist : "Vybz Kartel ",
        genre : "Dancehall "
    }],
    
    year : "Senior-L",
    bio : function() {
        return ("My name is " + student.name + student.lastname 
        + " and I like the songs: \n" + this.music);
        }
    }


console.log(student.bio());