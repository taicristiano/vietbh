<?php

namespace App\Http\Controllers;

use App\Auth;
use App\User;
use Exception;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    protected $auth;
    protected $user;

    public function __construct(Auth $auth, User $user)
    {
        $this->auth = $auth;
        $this->user = $user;
    }

    /**
     * @param $token
     * @return bool
     * @throws Exception
     */
    public function checkToken($token)
    {
        $result = Auth::where(['token' => $token, 'delete_flg' => 0])->first();
        if ($result) {
            $user = User::where('id', $result['user_id'])->first();
            return $user;
        } else {
            throw new Exception('token not found or expired', 403);
        }
    }
}
