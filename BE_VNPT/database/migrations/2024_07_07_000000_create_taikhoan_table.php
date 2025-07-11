<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('taikhoan', function (Blueprint $table) {
            $table->id();
            $table->string('tendangnhap', 50);
            $table->string('matkhau', 255);
            $table->string('email', 100);
            $table->string('sodienthoai', 20)->nullable();
            $table->string('diachi', 255)->nullable();
            $table->integer('id_loaitaikhoan')->nullable();
            $table->tinyInteger('trangthai')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('taikhoan');
    }
}; 