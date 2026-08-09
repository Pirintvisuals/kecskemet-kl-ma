<?php
require_once __DIR__ . '/../includes/functions.php';
blog_boot();
logout();
redirect('/blog/admin/login.php');
