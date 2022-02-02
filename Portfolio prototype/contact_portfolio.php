<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
if(isset($_POST['submit'])){
    $to = '"Emmanuel Debrand" <edebrand@me.com>';
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
    echo "<h1 class='thanks_msg'>Message envoyé. Merci " . $first_name . " Je vous contacterai dans les plus brefs délais </h1>" . "<a href='contact.html'>Retour</a>";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
}
?>
    
</body>
</html>