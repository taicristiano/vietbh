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
Route::get('admin/login', 'Admin\AuthController@getLoginAdmin')->name('getLogin');
Route::post('admin/login', 'Admin\Authcontroller@loginAdmin')->name('postLogin');
Route::post('admin/logout', 'Admin\Authcontroller@logout')->name('logout');
Route::get('admin', 'Admin\Admincontroller@index')->name('admin.getIndex')->middleware('admin');
