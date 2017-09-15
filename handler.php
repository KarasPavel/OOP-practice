<?php
/**
 * Created by PhpStorm.
 * User: artem
 * Date: 18.05.17
 * Time: 19:40
 */
require_once('lib/CallbackForm.php');

$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$formType = isset($_POST['formType']) ? trim($_POST['formType']) : '';

$form = new CallbackForm($name, $phone);

if ($form->validate()) {
    $form->send();
} else {
    echo 'Введите корректные данные';
}

