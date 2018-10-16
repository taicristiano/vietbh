<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::post('user', 'UserController@add')->name('registerUser');
Route::get('user', 'UserController@index')->name('getUser');
Route::post('user/{id}', 'UserController@update')->name('update');
Route::post('login', 'Authcontroller@login')->name('login');
Route::post('logout', 'Authcontroller@logout')->name('logout');
