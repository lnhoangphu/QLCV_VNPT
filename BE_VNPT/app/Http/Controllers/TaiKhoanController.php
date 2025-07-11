<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\taikhoan;
use Illuminate\Support\Facades\Hash;


class TaiKhoanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    protected $taikhoan;
    public function __construct(taikhoan $taikhoan)
    {
        $this->taikhoan = $taikhoan;
    }
    public function index()
    {
        return $this->taikhoan->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $data['matkhau'] = Hash::make($data['matkhau']);
        $user = taikhoan::create($data);
        return $user;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        return $this->taikhoan->find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $taikhoan = $this->taikhoan->find($id);
        $taikhoan->update($request->all());
        return $taikhoan;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $taikhoan = $this->taikhoan->find($id);
        $taikhoan->delete();
        return $taikhoan;
    }

    public function login(Request $request)
    {
        $login = $request->input('taikhoan'); 
        $password = $request->input('matkhau');

        $user = taikhoan::where('email', $login)
            ->orWhere('tendangnhap', $login)
            ->first();

        if (!$user) {
            return response()->json([
                'errCode' => 1,
                'errMessage' => 'Email hoặc tên đăng nhập không tồn tại.'
            ], 404);
        }

        if (!Hash::check($password, $user->matkhau)) {
            return response()->json([
                'errCode' => 3,
                'errMessage' => 'Sai mật khẩu'
            ], 401);
        }

        $userData = $user->toArray();
        unset($userData['matkhau']);

        return response()->json([
            'errCode' => 0,
            'errMessage' => 'Đăng nhập thành công',
            'user' => $userData
        ]);
    }
}
