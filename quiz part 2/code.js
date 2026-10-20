function checkQuiz() {
    var score = 0;

    // Check Question 1 (Tom Holland is correct)
    if (document.getElementById("q1_Tom Holland").checked == true) 
    {
        score = score + 1;
        document.getElementById("q1_feedback").innerHTML = "Correct!";
        document.getElementById("q1_feedback").style.color = "green";
    }
    else
    {
        document.getElementById("q1_feedback").innerHTML = "Incorrect!";
        document.getElementById("q1_feedback").style.color = "red";
    }

    // Check Question 2 (Tony Stark is correct)
    if (document.getElementById("q2_Tony Stark").checked == true)
    {
        score = score + 1;
        document.getElementById("q2_feedback").innerHTML = "Correct!";
        document.getElementById("q2_feedback").style.color = "green";
    }
    else
    {
        document.getElementById("q2_feedback").innerHTML = "Incorrect!";
        document.getElementById("q2_feedback").style.color = "red";
    }

    // Check Question 3 (Vision and Dr.Strange are correct)
    if (document.getElementById("q3_Vision").checked == true && document.getElementById("q3_Dr.Strange").checked == true && document.getElementById("q3_Black Widow").checked == false && document.getElementById("q3_Hawkeye").checked == false)
    {
        score = score + 1;
        document.getElementById("q3_feedback").innerHTML = "Correct!";
        document.getElementById("q3_feedback").style.color = "green";
    }
    else
    {
        document.getElementById("q3_feedback").innerHTML = "Incorrect!";
        document.getElementById("q3_feedback").style.color = "red";
    }

    // Check Question 4 (Cylcops and Wolverine are correct)
    if (document.getElementById("q4_Cylcops").checked == true && document.getElementById("q4_Wolverine").checked == true && document.getElementById("q4_The Flash").checked == false && document.getElementById("q4_Loki").checked == false)
    {
        score = score + 1;
        document.getElementById("q4_feedback").innerHTML = "Correct!";
        document.getElementById("q4_feedback").style.color = "green";
    }
    else
    {
        document.getElementById("q4_feedback").innerHTML = "Incorrect!";
        document.getElementById("q4_feedback").style.color = "red";
    }

    // Display the points earned on the screen
    document.getElementById("result").innerHTML = "You earned " + score + " out of 4 points!";
}
