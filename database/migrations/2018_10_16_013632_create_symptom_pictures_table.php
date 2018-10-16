<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSymptomPicturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('symptom_pictures', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('symptom_id')->nullable();
            $table->string('picture_name')->nullable();
            $table->integer('red_level')->nullable();
            $table->integer('itch_position')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('symptom_pictures');
    }
}
