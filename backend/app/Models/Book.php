<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Book extends Model
{
    use HasFactory;
    
    protected $fillable = ['id', 'title', 'author', 'description', 'updated_at', 'created_at'];
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
}
