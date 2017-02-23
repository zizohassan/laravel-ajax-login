# laravel-ajax-login
laravel ajax login row javascript

#installtion
add this command to terminal in linux or mac & cmd on windows

```
composer require 5dmatweblogin/ajaxlogin:dev-master
```

#Add provider
open config/app.php  add this line on providers array
```
AjaxLogin\AjaxLoginProvider\AjaxLoginProvider::class,
```

#Authentication scaffolding
add this line to terminal 
```
php artisan make:auth
```

#Publish Vendors
not last step to add this line
we write on login.blade.php & app.blade.php & logincontroller.php & add new file on public path 
/
```
php artisan vendor:publish --tag=5dmatweb --force
```
