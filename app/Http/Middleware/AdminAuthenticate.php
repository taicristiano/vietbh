<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class AdminAuthenticate
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @param string $guard
     * @return mixed
     */

    public function handle($request, Closure $next, $guard = 'admin')
    {
        $auth = Auth::guard($guard);
        if(!$auth->check()) {
            return redirect(route('getLogin'));
        }
        return $next($request);
    }
}
