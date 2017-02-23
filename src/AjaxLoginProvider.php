<?php

namespace AjaxLogin\AjaxLoginProvider;

use Illuminate\Support\ServiceProvider;

class AjaxLoginProvider extends ServiceProvider
{

    public function boot()
    {
        $path = __DIR__;
        $this->publishes([
            $path.'/assets' => base_path('public/AjaxLogin'),
            $path.'/auth' => base_path('app/Http/Controllers/Auth'),
            $path.'/view' => base_path('resources/views')
        ] , '5dmatweb');
    }
    public function register()
    {



    }

}
