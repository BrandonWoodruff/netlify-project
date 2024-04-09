<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Construct email message
    $to = "brandonwoodywoodruff@gmail.com"; // Your email address
    $subject = "New Form Submission";
    $body = "Name: $name\nEmail: $email\n\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "Form successfully submitted";
    } else {
        http_response_code(500); // Server error
        echo "Failed to send email";
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo "Method not allowed";
}
?>
