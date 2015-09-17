<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'maia');

/** MySQL database password */
define('DB_PASSWORD', 'maia');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '-g-3M&&6gZBm+NQYvT|/gkmj9(!7 2<-]KoJiA&Vgg>Visxo1{a<:=fa`eY=X|Qb');
define('SECURE_AUTH_KEY',  'dg-%x_ivtj:@CR/(GH~i!|sZH!-B<uPd4`2Tu[Z:dR:r09:Eb#H-GEdf~!_vVRPb');
define('LOGGED_IN_KEY',    '!mwkp4M^6a,$X//8}]ol=,LnG?1V%OfR,%4%=*+Drgq|(c_SJuwFQ-[>1D1L;pr7');
define('NONCE_KEY',        'tQDnV`Vq.MnNOx;*H3n;WQJA@Lo(VG,(Nu8e9T.a6.]$aYxsNr_|%<x&C]d5pjoa');
define('AUTH_SALT',        '&mnXXJ)|+^Bh[hGx^clMfMy(!qi{*AXM=+/HBN>|z|Ea8l`LNskhoJ2t.xH#PyDr');
define('SECURE_AUTH_SALT', '=|%>>??ta).%0)wx,-R@HNvf@m/_;I:4Tt_5qx|rTy:G2-d]Fg60x.X0#Z56BWWu');
define('LOGGED_IN_SALT',   '|X#}NF04z,9}Y;|]Sg,ygIA13[|]ZLJ8bd4tc)ye[c5ey|Xlwq]:+}nmY`NoAG-|');
define('NONCE_SALT',       'RzBU=}<i}xs*@~|yu1gUbH$`U+8u<$oU2ndF1 nD^MkNDw+A,p=UR#x0-Zk<h>#4');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

