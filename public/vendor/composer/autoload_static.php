<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitfa94f0b2721cced4612607e26dc67ef9
{
    public static $prefixLengthsPsr4 = array (
        'G' => 
        array (
            'Geolocations\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Geolocations\\' => 
        array (
            0 => __DIR__ . '/../..' . '/classes',
        ),
    );

    public static $classMap = array (
        'Geolocations\\Ajax' => __DIR__ . '/../..' . '/classes/Ajax.inc',
        'Geolocations\\Areas' => __DIR__ . '/../..' . '/classes/Areas.php',
        'Geolocations\\GeolocationPost' => __DIR__ . '/../..' . '/classes/GeolocationPost.php',
        'Geolocations\\GeolocationsQuery' => __DIR__ . '/../..' . '/classes/GeolocationsQuery.php',
        'Geolocations\\Grid' => __DIR__ . '/../..' . '/classes/Grid.php',
        'Geolocations\\MapAPI' => __DIR__ . '/../..' . '/classes/MapAPI.php',
        'Geolocations\\MetaBox' => __DIR__ . '/../..' . '/classes/MetaBox.php',
        'Geolocations\\Migrate' => __DIR__ . '/../..' . '/classes/Migrate.php',
        'Geolocations\\Model\\Location' => __DIR__ . '/../..' . '/classes/Model/Location.php',
        'Geolocations\\Post' => __DIR__ . '/../..' . '/classes/Post.php',
        'Geolocations\\Settings' => __DIR__ . '/../..' . '/classes/Settings.php',
        'Geolocations\\Shortcode' => __DIR__ . '/../..' . '/classes/Shortcode.php',
        'Geolocations\\_Component' => __DIR__ . '/../..' . '/classes/_Component.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitfa94f0b2721cced4612607e26dc67ef9::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitfa94f0b2721cced4612607e26dc67ef9::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitfa94f0b2721cced4612607e26dc67ef9::$classMap;

        }, null, ClassLoader::class);
    }
}
