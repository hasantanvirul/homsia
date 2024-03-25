<?php
header("Access-Control-Allow-Origin: *");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


// get refferer server
if($_SERVER['HTTP_REFERER'] === "http://localhost:3000/"){
    // extract the data from $_POST
    $first_name = isset($_GET['first_name']) ? $_GET['first_name'] : null;
    $last_name = isset($_GET['last_name']) ? $_GET['last_name'] : null;
    $message = isset($_GET['message']) ? $_GET['message'] : null;
    $email = isset($_GET['sendto']) ? $_GET['sendto'] : null;

    if($first_name && $last_name && $message && $email){
    
        //Load composer's autoloader
        // require 'vendor/autoload.php';

        $mail = new PHPMailer(true);
        try{
            // SMTP server configuration
            $mail->isSMTP();                                      // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                             // Enable SMTP authentication
            $mail->Username   = '';           // SMTP username
            $mail->Password   = '';                        // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
            $mail->Port       = 587;

            // Recipients
            // $mail->setFrom('mitrodigitalsmtp@gmail.com', 'React Contact form');
            $mail->addAddress('mohammad.hasan10@northsouth.edu', 'Mohammad Tanvirul Hasan');     // Add a recipient
            // $mail->addReplyTo('mitrodigitalsmtp@gmail.com', 'Information');

            // Content
            $mail->isHTML(true);      // Set email format to HTML
            $mail->Subject = '[IMP]Homasia Properties Contact Form';
            $mail->Body    = 'First Name: ' . $name . '<br />Email: ' . $email . '<br /><br /><b>Message:</b> '
            . $message;

            if($mail->send())
                echo "Message has been sent!";
        }catch (Exception $e){
            echo "Message couldn't be sent. Error: ", $mail->ErrorInfo;
        }
    }else{
        echo "All the fileds are required!";
    }
}else{
    echo "You can't use this server!";
}
?>