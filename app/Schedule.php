<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    /**
     * @return string
     */
    public function getThumbnailAttribute()
    {
        return asset('images/schedule') . '/' .$this->attributes['thumbnail'];
    }
}
