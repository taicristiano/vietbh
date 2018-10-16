<?php

namespace App\Http\Controllers;

use App\Auth;
use App\Http\Requests\UserRequest;
use App\Library\StringHelper;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AuthController extends Controller
{
    protected $request;

    /**
     *
     * @param Request $request
     * @param User $user
     * @param Auth $auth
     */
    public function __construct(Request $request,Auth $auth, User $user)
    {
        $this->request = $request;
        $this->auth = $auth;
        $this->user = $user;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function login()
    {
        $data = $this->request->all();
        $user = User::where(['email' => $data['email'], 'password' => $data['password']])->first();
        if ($user) {
            $token['token'] = StringHelper::randomUnique(64);
            $token['user_id'] = $user->id;
            $token['delete_flg'] = 0;
            $this->auth->insert($token);
            $user['token'] = $token['token'];
            return response()->json(['data' => $user,
                'status' => Response::HTTP_OK]);
        } else {
            return response()->json(['data' => $user,
                'status' => Response::HTTP_FORBIDDEN]);
        }

    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        $data = $this->request->all();
        $result = $this->checkToken($data['token']);
        if ($result) {
            $tokens = $this->auth->where('token', $data['token'])->first();
            $tokens->delete_flg = 1;
            $tokens->save();
            return response()->json(['status' => Response::HTTP_OK]);
        }
        return response()->json(['status' => Response::HTTP_FORBIDDEN]);
    }
}
