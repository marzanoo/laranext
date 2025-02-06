<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;
use App\Models\User;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\TryCatch;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json([
            'result' => $users
        ]);
    }
    public function store(UserStoreRequest $request)
    {
        try {
            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password,
            ]);

            return response()->json([
                'message' => "User created successfully",
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'message' => "Something went wrong",
            ], 500);
        }
    }

    public function show($id)
    {
        $users = User::find($id);
        if (!$users) {
            return response()->json([
                'message' => "User not found",
            ], 404);
        }
        return response()->json([
            'users' => $users
        ]);
    }

    public function update(UserStoreRequest $request, $id)
    {
        try {
            //Find user by id
            $users = User::find($id);
            if (!$users) {
                return response()->json([
                    'message' => "User not found",
                ], 404);
            }

            $users->name = $request->name;
            $users->email = $request->email;

            $users->save();
            return response()->json([
                'message' => "User updated successfully",
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Something went wrong",
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $users = User::find($id);
            if (!$users) {
                return response()->json([
                    'message' => "User not found",
                ], 404);
            }
            $users->delete();
            return response()->json([
                'message' => "User deleted successfully",
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Something went wrong",
            ], 500);
        }
    }
}
