<?php
    $nome=$_POST['nome'];
    $cognome=$_POST['cognome'];
    $email=$_POST['email'];
    $tel=$_POST['tel'];
    $comune=$_POST['comune'];
    $citta=$_POST['citta'];
    $msg=$_POST['msg'];
    $testo = $nome . ' ' . $cognome . "\n" . $email . "\n" . $tel . "\n" . $comune . ', ' . $citta . "\n" . $msg;

    require "vendor/autoload.php";
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;

    $mail = new PHPMailer(true);
    
    $mail->isSMTP();
    $mail->SMTPAuth = true;

    $mail->Host = "smtp.gmail.com";
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->Username = "";
    $mail->Password = "";

    $mail->setFrom($email,$nome);
    $mail->addAddress("duccineri@gmail.com","Neri");

    $mail->Subject = $nome;
    $mail->Body = $testo;

    $mail->send();
?>