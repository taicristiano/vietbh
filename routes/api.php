<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('user', 'UserController');
Route::resource('article', 'ArticlesController');
Route::resource('doctor', 'DoctorController');
Route::resource('symptom', 'SymptomController');
Route::resource('medicine', 'MedicineController');
Route::resource('clinic', 'ClinicController');
Route::resource('schedule', 'ScheduleController');
Route::resource('scheduleContent', 'ScheduleContentController');
Route::resource('message', 'MessageController');

Route::post('user/{id}', 'UserController@update')->name('update');
Route::post('login', 'Authcontroller@login')->name('login');
Route::post('logout', 'Authcontroller@logout')->name('logout');
Route::post('schedules/edit/:id', 'ScheduleController@postEdit');
