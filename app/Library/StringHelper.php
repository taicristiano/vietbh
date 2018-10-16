<?php

namespace App\Library;

class StringHelper
{
    /**
     * Generate a more truly "random" alpha-numeric string.
     *
     * @param  int $length
     * @return string
     */
    public static function randomUnique($length = 16)
    {
        $string = '';
        while (($len = strlen($string)) < $length) {
            $size   = $length - $len;
            $bytes  = self::generateRandomString($size);
            $string .= substr(str_replace(['/', '+', '='], '', base64_encode($bytes)), 0, $size);
        }
        return $string;
    }

    /**
     * generate random string
     * @param  integer $length
     * @return string
     */
    public static function generateRandomString($length = 10)
    {
        $characters       = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString     = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    /**
     * parse name to navbar
     * @param  string $familyName
     * @param  string $givenName
     * @return string
     */
    public static function parseName($familyName, $givenName)
    {
        $name = $familyName . ' ' . $givenName;
        return strlen($name) < 60 ? $name : substr($name, 0, 60) . '...';
    }
}
