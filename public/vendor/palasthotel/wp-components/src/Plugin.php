<?php


namespace Palasthotel\WordPress;


use ReflectionException;

/**
 * @property string path
 * @property string url
 * @property string basename
 */
abstract class Plugin {

	/**
	 * @throws ReflectionException
	 */
	public function __construct() {
		$ref            = new \ReflectionClass( get_called_class() );
		$this->path     = plugin_dir_path( $ref->getFileName() );
		$this->url      = plugin_dir_url( $ref->getFileName() );
		$this->basename = plugin_basename( $ref->getFileName() );

		$this->onCreate();

		register_activation_hook( $ref->getFileName(), array( $this, "onActivation" ) );
		register_deactivation_hook( $ref->getFileName(), array( $this, "onDeactivation" ) );

	}

	abstract function onCreate();

	public function onActivation(bool $networkWide) {
	}

	public function onDeactivation(bool $networkWide) {

	}

	private static $instances = [];

	public static function instance() {
		$class = get_called_class();
		if ( ! isset( self::$instances[ $class ] ) ) {
			self::$instances[ $class ] = new static();
		}

		return self::$instances[ $class ];
	}
}