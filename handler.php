<?php
/**
 * Created by PhpStorm.
 * User: artem
 * Date: 18.05.17
 * Time: 19:40
 */
require_once('lib/CallbackForm.php');


$name = trim($_POST['name']);
$phone = (int)trim($_POST['phone']);
$formType = trim($_POST['formType']);


$form = new CallbackForm($name, $phone);

if ($form->validate()) {
    $form->send();
} else {
    echo 'Введите корректные данные';
}

