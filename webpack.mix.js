let mix = require('laravel-mix');


mix.disableNotifications();
mix.disableSuccessNotifications();

mix.copy('resources/js/*.js', 'dist/assets/js/');

mix.sass('resources/sass/style.scss', 'dist/assets/css')
   .sass('resources/sass/home.scss', 'dist/assets/css')
   .sass('resources/sass/news.scss', 'dist/assets/css')
   .sass('resources/sass/view-news.scss', 'dist/assets/css')
   .sass('resources/sass/about.scss', 'dist/assets/css')
   .sass('resources/sass/inspirasi.scss', 'dist/assets/css')
   .options({
    processCssUrls: false, 
    postCss: [
      require('autoprefixer')({
      cascade: false,
      flexbox: 'no-2009'
    })
  ]
});