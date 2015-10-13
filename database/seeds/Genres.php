<?php

use Illuminate\Database\Seeder;

class Genres extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $genres=['Action','Sci-Fi'];

		foreach ($genres as $genre) {
  			\App\Genre::create(
      			[		
          			'name'=>$genre
      			]
  			);
		}
    }
}
