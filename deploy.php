<?php

namespace Deployer;

require 'recipe/common.php';

require 'vendor/authwit/deployer-wp-recipes/recipes/assets.php';
require 'vendor/authwit/deployer-wp-recipes/recipes/cleanup.php';
require 'vendor/authwit/deployer-wp-recipes/recipes/db.php';
require 'vendor/authwit/deployer-wp-recipes/recipes/uploads.php';
# Include if you're using phpdotenv
//require 'vendor/vlucas/phpdotenv/src/Dotenv.php';

# Include if you're using phpdotenv
//require 'vendor/vlucas/phpdotenv/src/Dotenv.php';

// Project name
set('application', 'ulem.org');

// Project repository
set('repository', 'git@github.com:theulem/website.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', false);

set('keep_releases', 3);

set('ssh_multiplexing', false);


// Shared files/dirs between deploys
set('shared_files', [
    'web/.htaccess',
    '.env',
]);
set('shared_dirs', [
    'web/app/uploads',
]);

// Writable dirs by web server
set('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts
inventory('hosts.yml');


//// Tasks
set('wp-recipes', [
    'theme_dir' => '/web/app/themes',
    'theme_name' => 'astra',
    'shared_dir' => '{{ deploy_path }}/shared',
    'local_wp_url' => 'http://csl.local',
    'remote_wp_url' => 'https://counseal.com',
    'remote_url' => 'https://counseal.com',
    'clean_after_deploy' => [
        'deploy.php',
        '.gitignore',
        '*.md'
    ]
]);

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:vendors',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

//before('db:cmd:pull', 'env:uri');
//before('db:cmd:push', 'env:uri');


// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
after('deploy', 'deploy:cleanup');
after('deploy', 'success');
