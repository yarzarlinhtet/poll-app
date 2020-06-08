<?php

namespace App\Http\Controllers;

use App\Model\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'device_name' => 'required'
        ]);
    
        $user = User::where('email', $request->email)->first();
    
        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
    
        return $this->respondWithToken($user->createToken($request->device_name)->plainTextToken, $user);
    }

    public function me(Request $request)
    {   
        return $request->user();
    }

    public function logout(Request $request)
    {
        return $request->user()->currentAccessToken()->delete();
    }

    protected function respondWithToken($token, $user)
    {
        return response()->json([
            'access_token' => $token,
            'user' => $user,
            'token_type' => 'bearer',
            'expires_in' =>  60
        ]);
    }
}
