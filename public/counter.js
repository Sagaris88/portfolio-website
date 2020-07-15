var counter = 0;

function upvote() {
    counter = counter + 1;
    document.getElementById("upvote").innerHTML = counter + " votes";
}

function downvote() {
    counter = counter - 1;
    document.getElementById("upvote").innerHTML = counter + " votes";
}

function comment() {
    var comment = document.getElementById("commentInput").value;
    document.getElementById("commentPlace").innerHTML = comment;
}