<?php
namespace Deployer;

require 'recipe/symfony.php';

// Config

set('repository', 'DigitLight');

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Hosts
host('example.org')
    ->set('remote_user', 'deployer')
    ->set('deploy_path', '~/DigitLight');

// Hooks

after('deploy:failed', 'deploy:unlock');
