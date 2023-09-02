
<?php

$servername = "localhost";
$username = "deskrobo";
$password = "Deskrobo";
$dbname = "deskrobo";

$name = $_POST['name'];
$email = $_POST['email'];
$comment = $_POST['comment'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$date = date("Y-m-d H:i:s");
echo $date;
$sql = "INSERT INTO feedback (name, email, feedback, feedback_date)
VALUES ('" . $name . "','" . $email . "','" . $comment . "', '" . $date . "')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
