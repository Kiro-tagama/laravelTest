<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class Reservation extends Model{
    protected $fillable = ['user_id', 'book_id', 'book_name'];

    protected $primaryKey = 'id';
    public $incrementing = false; // Indica que a chave primária não é incremental
    protected $keyType = 'string'; // Indica o tipo da chave primária

    // Se você quiser gerar automaticamente UUIDs ao criar um novo livro
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->id = Str::uuid()->toString();
        });
    }

    // Relacionamento com o usuário
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function book()
    {
        return $this->belongsTo(Book::class, 'book_id', 'id');
    }
}
