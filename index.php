<?php
$pages = array('index', 'user', 'search', 'order', 'signup');
$page = (isset($_GET['page'])) ? $_GET['page'] : 'index';
if(in_array($page, $pages)){
    include_once("./$page.html");
}
?>