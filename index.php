<?php
$pages = array('index', 'user');
$page = (isset($_GET['page'])) ? $_GET['page'] : 'index';
if(in_array($page, $pages)){
    include("./$page.html");
}
?>