<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Support\Collection;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;


use App\Book;
class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $data = Book::with('genre')->get();
        return Response::json([
            'data'=>$data
            ]);
       
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {

    switch($request['request_type']){
      case 'add book':
      $this->add();
      break;
      case 'lend book':
      $this->lend();
      break;
    }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }

    // Custom Functions
    /**
     * @description [add description]
     */
    private function add(){
        $book = Input::get();
        $newBook = Book::create($book);
        if($newBook){
            return $newBook->name.'  Added to Library';
        }
        
    }

/**
 * @description [lend description]
 * @return [type] [description]
 */
    private function lend(){
        
    }
}
