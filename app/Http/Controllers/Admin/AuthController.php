<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\AdminLoginRequest;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    use AuthenticatesUsers;

    protected $request;

    public function username()
    {
        return 'username';
    }

    protected $guard = 'admin_guard';


    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/admin';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getLoginAdmin()
    {
        return view('admin.blocks.login');
    }

    /**
     * @param AdminLoginRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function loginAdmin(AdminLoginRequest $request)
    {
        $data = $request->all();
        if (auth()->guard('admin')->attempt(['username' => $data['username'], 'password' => $data['password']])) {
            return redirect()->intended('admin');
        }
        return back()->with('error', 'Tên đăng nhập hoặc mật khẩu không chính xác!');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        Auth::guard('admin')->logout();
        return redirect()->route('getLogin');
    }


}
