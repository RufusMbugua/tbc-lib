<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable=['name','tags','author','genre_id'];

    function genre(){
    	
      return $this->belongsTo('App\Genre');
    }
}
