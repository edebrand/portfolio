<?php
if(isset($_POST['submit'])){
    $to = 'edebrand@me.com';
    $from = $_POST['email'];
    $first_name = $_POST['firstName'];
    $last_name = $_POST['lastName'];
    $subject = 'Nouveau message sur ton portfolio';
    $subject2 = 'Copie de votre message à Emmanuel Debrand';
    $message = $first_name . " " . $last_name . " a écrit:" . "\n\n" . $_POST['message'];
    $message2 = "Voici une copie du message envoyé à Emmanuel Debrand " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Message envoyé. Merci " . $first_name . ", je vous contacterai dans les plus brefs délais";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
}
?>