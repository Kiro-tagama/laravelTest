<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\UserSpecificSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void{
        \App\Models\User::factory(1)->create();
        \App\Models\Book::factory(10)->create();
        
        $this->call([UserSpecificSeeder::class]);
    }
}
