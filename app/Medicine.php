<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Medicine extends Model
{
    protected $appends = ['picture_name'];

    protected $hidden = ['created_at', 'updated_at'];

    /**
     * @return string
     */
    public function getPictureNameAttribute()
    {
        return asset('images/medicines') . '/' .$this->attributes['picture_name'];
    }
}
