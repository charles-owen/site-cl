<?php
/**
 * @file
 * Support for basic encryption/decryption
 */

namespace CL\Site\Util;


/**
 * Exception for Encrypt operation failures
 */
class EncryptException extends \Exception {
	/**
	 * Constructor
	 * @param string $msg Exception message to use
	 */
	public function __construct($msg) {
		parent::__construct($msg);
	}
}

/**
 * Class with support for basic encryption/decryption
 */
class Encrypt {
	/**
	 * Constructor
	 */
	public function  __construct() {
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {


			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'privateKey':
				$this->privateKey = $value;
				break;

			case 'publicKey':
				$this->publicKey = $value;
				break;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}
	}


	/**
	 * Encrypt a message using a public or private key
	 *
	 * For an B bit encryption key, message may be no more
	 * than B - 88 bits long.
	 *
	 * 4096 bit key: 501 bytes
	 *
	 * @param string $msg Message to encrypt
	 * @param bool $public True if encrypted with public key
	 * @return string base64 encoding of encrypted message
	 * @throws EncryptException
	 */
	public function encrypt($msg, $public) {
		if($public) {
			$result = openssl_public_encrypt($msg, $crypted, $this->publicKey);
		} else {
			$result = openssl_private_encrypt($msg, $crypted, $this->privateKey);
		}

		if($result === false) {
			throw new EncryptException("Encrypt::encrypt failed.");
		}

		return base64_encode($crypted);
	}

	/**
	 * Decrypt a message encrypted using the encrypt function
	 *
	 * @param string $msg Encrypted message in base64
	 * @param bool $public True if decrypted with public key
	 * @return mixed
	 * @throws EncryptException
	 */
	public function decrypt($msg, $public) {
		$msgB = base64_decode($msg);

		if($public) {
			openssl_public_decrypt($msgB, $decrypted, $this->publicKey);
		} else {
			openssl_private_decrypt($msgB, $decrypted, $this->privateKey);
		}

		return $decrypted;
	}

	private function get_pkey($public) {
		if($public) {
			$pkey = openssl_pkey_get_public('file://' . $this->keyPrefix . 'public.pem');
		} else {
			$pkey = openssl_pkey_get_private('file://' . $this->keyPrefix . 'private.pem');
		}

		if($pkey === false) {
			throw new EncryptException("Invalid " . ($public ? "public" : "private") . " key file");
		}

		return $pkey;
	}

	/**
	 * Encrypts a message that is large than can be accepted by encrypt/decrypt
	 *
	 * Creates a one-time key and encrypts the data using that key. The key
	 * is then encrypted using encrypt/decrypt.
	 *
	 * @param string $msg Message to encrypt
	 * @param bool $public True for public key encryption
	 * @return array with keys 'key', 'data'
	 * @throws EncryptException
	 */
	public function encrypt_large($msg, $public) {
		$key_size = $this->keySize / 8; // Number of bytes
		$encryption_key = openssl_random_pseudo_bytes($key_size, $strong);

		$iv_size = $key_size / 2;
		$iv = openssl_random_pseudo_bytes($iv_size, $strong);

		$enc = openssl_encrypt(
			$msg, 				// data to encrypt
			'AES-256-CBC',        // cipher and mode
			$encryption_key,      // secret key
			0,                    // options (not used)
			$iv                   // initialisation vector
		);

		$sendKey = json_encode([
			'key' => base64_encode($encryption_key),
			'iv' => base64_encode($iv)]);

		return array('key' => $this->encrypt($sendKey, $public), 'data' => $enc);
	}

	/**
	 * Decrypt a message that was encrypted using encrypt_large()
	 *
	 * @param array $msg Array with the keys 'key' and 'data' as returned by encrypt_large()
	 * @param $public True if public key decryption
	 * @return string Decrypted message
	 * @throws EncryptException
	 */
	public function decrypt_large($msg, $public) {
		$key = $msg['key'];
		$data = $msg['data'];
		$sentKey = json_decode($this->decrypt($key, $public), true);

		$encryption_key = base64_decode($sentKey['key']);
		$iv = base64_decode($sentKey['iv']);

		$msg = openssl_decrypt(
			$data,
			'AES-256-CBC',
			$encryption_key,
			0,
			$iv
		);

		return $msg;
	}

	/**
	 * Set the key size to use when encrypting larger data
	 * @param $size Key size in bits, default is 256
	 */
	public function set_key_size($size) {
		$this->keySize = $size;
	}

	private $publicKey = null;
	private $privateKey = null;
	private $keyPrefix;
	private $keySize = 256;		// Key size in bits
}