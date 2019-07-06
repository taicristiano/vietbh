<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Medicine extends Model
{

    protected $table = 'medicines';

    protected $appends = ['thumbnail_web', 'thumbnail_app', 'format_price'];

    protected $hidden = ['created_at', 'updated_at', 'thumbnail'];

    /**
     * @return string
     */
    public function getThumbnailAppAttribute()
    {
        return asset('images/medicine/thumbnail') . '/' . "{$this->thumbnail}";
    }

    /**
     *
     * @return string
     */
    public function getThumbnailWebAttribute()
    {
        return asset("images/medicine") . "/" . "{$this->thumbnail}";
    }

    public function getFormatPriceAttribute()
    {
        return number_format("{$this->price}", 0, ".", '.');
    }
}
