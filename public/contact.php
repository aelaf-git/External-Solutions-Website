<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the JSON data from the request body
    $json = file_get_contents('php://input');
    $data = json_decode($json);

    if (empty($data->name) || empty($data->email) || empty($data->subject) || empty($data->message)) {
        echo json_encode(["success" => false, "message" => "Please fill in all fields."]);
        exit;
    }

    $name = strip_tags(trim($data->name));
    $email = filter_var(trim($data->email), FILTER_SANITIZE_EMAIL);
    $subject_plain = strip_tags(trim($data->subject));
    $message_content = strip_tags(trim($data->message));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Invalid email address."]);
        exit;
    }

    // --- CONFIGURE YOUR RECIPIENT EMAIL HERE ---
    $to = "ali@externalsolutionsllc.org"; 
    // -------------------------------------------

    $email_subject = "New Contact Form Submission: $subject_plain";
    $email_body = "You have received a new message from your website contact form.\n\n".
                  "Name: $name\n".
                  "Email: $email\n".
                  "Subject: $subject_plain\n\n".
                  "Message:\n$message_content";

    $headers = "From: webmaster@externalsolutionsllc.org\r\n"; // Recommended to use an email from your domain
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo json_encode(["success" => true, "message" => "Thank you! Your message has been sent."]);
    } else {
        echo json_encode(["success" => false, "message" => "Sorry, something went wrong and we couldn't send your message."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
}
?>
