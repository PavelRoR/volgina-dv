<?php

$videos = ['', '', ''];
$hides = ['', '', ''];


$now = strtotime('now');
$dates = array(strtotime('2022-01-19'), strtotime('2022-01-20'), strtotime('2022-01-21'), strtotime('2022-01-24'));

$sales1 = array('4 000р.','2 000р.');
$sales2 = array('4 000р.','2 000р.');
$sales3 = array('4 000р.','2 000р.');

$todays1 = array('16 000р.','18 000р.');
$todays2 = array('28 000р.','30 000р.');
$todays3 = array('40 000р.','42 000р.');

$links1 = array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1294&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1297&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1298&clean=true&lg=ru');
$links2 = array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1300&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1301&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1302&clean=true&lg=ru');
$links3 = array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1304&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1305&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1306&clean=true&lg=ru');

$prepLinks = array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1308&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1309&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1310&clean=true&lg=ru');

if ($now < $dates[0]){
    $sale1 = $sales1[0];
    $sale2 = $sales2[0];
    $sale3 = $sales3[0];

    $today1 = $todays1[0];
    $today2 = $todays2[0];
    $today3 = $todays3[0];

    $link1 = $links1[0];
    $link2 = $links2[0];
    $link3 = $links3[0];

    $prepLink = $prepLinks[0];
}
else if (($now >= $dates[0]) && $now < $dates[1]){
    $sale1 = $sales1[1];
    $sale2 = $sales2[1];
    $sale3 = $sales3[1];

    $today1 = $todays1[1];
    $today2 = $todays2[1];
    $today3 = $todays3[1];

    $link1 = $links1[1];
    $link2 = $links2[1];
    $link3 = $links3[1];

    $prepLink = $prepLinks[1];
}
else {

    $link1 = $links1[2];
    $link2 = $links2[2];
    $link3 = $links3[2];

    $prepLink = $prepLinks[2];
}

?>