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

Route::group(['prefix' => 'admin', 'middleware' => 'admin', 'namespace' => 'Admin'], function () {
    Route::get('/', 'Admincontroller@index')->name('admin.getIndex');
    Route::post('logout', 'Authcontroller@logout')->name('logout');
    Route::get('schedule', 'ScheduleController@home')->name('admin.getSchedule');
    Route::get('schedule/add', 'ScheduleController@create')->name('admin.getAddSchedule');
    Route::get('schedule/edit/{id}', 'ScheduleController@home')->name('admin.getEditSchedule');
});

Route::get('/', 'Indexcontroller@index')->name('index');
//Route::get();