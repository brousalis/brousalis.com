<?php
    //we need to get our variables first

    $email_to =   'brousapg@gmail.com'; //the address to which the email will be sent
    $email    =   $_POST['email'];
    $message  =   $_POST['body'];

    $headers  = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if(mail($email_to, $subject, $message, $headers)){
        echo 'sent'; // we are sending this text to the ajax request telling it that the mail is sent..
    }else{
        echo 'failed';// ... or this one to tell it that it wasn't sent
    }
?>
