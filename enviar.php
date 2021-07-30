<?php
  //Variáveis
  $nome = $_POST['nome'];
  $telefone = $_POST['phone'];
  $peaple = $_POST['peaple'];
  $origin = $_POST['origin'];
  $destiny = $_POST['destiny'];
  $datatravel = $_POST['datatravel'];
  $email = $_POST['email'];
  $data_envio = date('d/m/Y');
  $hora_envio = date('H:i:s');

  //Compo E-mail
  $arquivo = "
    <html>
      <p><b>Nome: </b>$nome</p>
      <p><b>E-mail: </b>$email</p>
      <p><b>Telefone: </b>$phone</p>
      <p><b>QUantidade de Pessoas: </b>$peaple</p>
      <p><b>Origem: </b>$origin</p>
      <p><b>Destino: </b>$destiny</p>
      <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
    </html>
  ";
  
  //Emails para quem será enviado o formulário
  $destino = "angeloengcomp@gmail.com";
  $assunto = "Contato pelo Site";

  //Este sempre deverá existir para garantir a exibição correta dos caracteres
  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\n";
  $headers .= "From: $nome <$email>";

  //Enviar
  mail($destino, $assunto, $arquivo, $headers);
  
  echo "<meta http-equiv='refresh' content='10;URL=../index.html'>";
?>