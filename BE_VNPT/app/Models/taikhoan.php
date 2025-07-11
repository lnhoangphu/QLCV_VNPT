<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class taikhoan extends Model
{
    use HasFactory;

    protected $table = 'taikhoan';

    protected $fillable = [
        'tendangnhap',
        'matkhau',
        'email',
        'sodienthoai',
        'diachi',
        'id_loaitaikhoan',
        'trangthai',
    ];

    // Nếu không dùng timestamps mặc định (created_at, updated_at), có thể cấu hình lại:
    // public $timestamps = false;
}
