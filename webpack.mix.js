const mix = require('laravel-mix');

mix.js('src/js/main.js', 'public/js')
   .sass('src/scss/main.scss', 'public/css');