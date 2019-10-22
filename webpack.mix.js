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
   .sass('resources/sass/sign-user.scss', 'dist/assets/css')
   .sass('resources/sass/register.scss', 'dist/assets/css')
   .sass('resources/sass/diskusi.scss', 'dist/assets/css')
   .sass('resources/sass/view-diskusi.scss', 'dist/assets/css')
   .sass('resources/sass/gallery.scss', 'dist/assets/css')
   .sass('resources/sass/account.scss', 'dist/assets/css')
   .sass('resources/sass/chat.scss', 'dist/assets/css')
   .sass('resources/sass/settings.scss', 'dist/assets/css')
   .sass('resources/sass/liked.scss', 'dist/assets/css')
   .sass('resources/sass/account-mobile.scss', 'dist/assets/css')
   .sass('resources/sass/404.scss', 'dist/assets/css')
   .sass('resources/sass/startup.scss', 'dist/assets/css')
   .options({
    processCssUrls: false, 
    postCss: [
      require('autoprefixer')({
      cascade: false,
      flexbox: 'no-2009'
    })
  ]
});