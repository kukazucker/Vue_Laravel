<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        $user1 = \App\Models\Personal::create([
            'first_name' => 'Ludmila',
            'last_name' => 'Grigorovna',
            'birth_day' => '1981-04-11',
            'email' => 'grigorovna@gmail.com',
            'phone' => '87653380457',
            'password' => Hash::make(';alfdskasd#@!$dasfjoij)(U+'),
        ]);
        $user2 = \App\Models\Personal::create([
            'first_name' => 'Eduard',
            'last_name' => 'Elemanzev',
            'birth_day' => '1983-07-12',
            'email' => 'elemanzev@gmail.com',
            'phone' => '81347426147',
            'password' => Hash::make('afdsfdasasdf*(YHIOU:oih'),
        ]);
        $user3 = \App\Models\Personal::create([
            'first_name' => 'Sergey',
            'last_name' => 'Ruzkov',
            'birth_day' => '1978-12-16',
            'email' => 'ruzkov@gmail.com',
            'phone' => '82368754856',
            'password' => Hash::make('fdswerkjla@#!$%(*Ukjn;'),
        ]);
        $user4 = \App\Models\Personal::create([
            'first_name' => 'Nikolay',
            'last_name' => 'Wilov',
            'birth_day' => '1976-01-28',
            'email' => 'wilov@gmail.com',
            'phone' => '88834464055',
            'password' => Hash::make('afsd$#%fj)((*HOm,'),
        ]);

    }
}
