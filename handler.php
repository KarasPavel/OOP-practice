<?php
/**
 * Created by PhpStorm.
 * User: artem
 * Date: 18.05.17
 * Time: 19:40
 */
require_once('lib/CallbackForm.php');
require_once('lib/LowerForm.php');

$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$mail = isset($_POST['mail']) ? trim($_POST['mail']) : '';
$formType = isset($_POST['formType']) ? trim($_POST['formType']) : '';

if ($formType == "callback") {
    $form = new CallbackForm($name, $phone);
} else {
    $form = new LowerForm($name, $phone, $mail);
}

if ($form->validate()) {

    $form->send();

} else {

    echo 'Введите корректные данные';

}