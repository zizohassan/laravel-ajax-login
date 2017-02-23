<?php

namespace AjaxLogin\AjaxLoginProvider;

use Illuminate\Support\ServiceProvider;

class AjaxLoginServiceProvider extends ServiceProvider
{

    public function boot()
    {
        $path = __DIR__;
        $this->publishes([
            $path.'/assets' => base_path('public/AjaxLogin'),
            $path.'/auth' => base_path('app/Http/Controllers/Auth'),
            $path.'/view' => base_path('app/resources/views/auth')
        ]);
    }
    public function register()
    {



    }

}
