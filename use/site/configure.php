<?php
require '../site.php';
$view = new CL\Site\Doc\DocView($site);
$view->title = 'cl/site configuration';
?>
<!DOCTYPE html>
<html>
<head>
<link href="../../cl/site.css" type="text/css" rel="stylesheet" />
<?php echo $view->head(); ?>
</head>

<body>
<?php echo $view->header(); ?>
<?php echo Backto::to("cl/site", "./"); ?>
<p>The cl/site installation process creates a file site.php in the site root directory that is the
main configuration file for a site.</p>

<h2>Required Configurations</h2>
<h3>Site root</h3>
<p>Set the value of the site root to a path on the server to the site root directory if the site is not at the root normally.</p>
<pre class="code">// The site root path. Set to different value if
// path to site is not in server root.
$site-&gt;root = '';</pre>
<p>For example, if the site root is https://www.cse.msu.edu/~cse999, the value of $site-&gt;root would be set to '/~cse499'. A leading slash is included for any non-empty path. Do not include the trailing slash.</p>
<h3>Site name</h3>
<p>Set the siteName to a name for the site:</p>
<pre class="code">$site-&gt;siteName = 'CourseLib';</pre>
<p>If the cl/course component is installed, the siteName is automatically set.</p>
<h3>Database Configuration</h3>
<pre class="code">// Database configuration
// The fields are:
// dbhost: Database host string, like 'mysql:host=127.0.0.1;dbname=cse999'
// dbname: Database name: like 'cse999'
// dbuser: Database user id, like 'cse999'
// dbpassword: Database password
// prefix: Prefix to add to table names (optional, but recommended)
$site-&gt;db-&gt;configure('',
	'',
	'',
	'',
	'');</pre>
<p>Set the database configuration for the database in use by the site. For example:</p>
<pre class="code">	$site-&gt;db-&gt;configure('mysql:host=127.0.0.1;dbname=cse999',
		'cse999',
		'cse999',
		'password',
		'cse999_');</pre>
<p>The database prefix will be prefixed on all table names and is useful to make the tables used by the system clear. For example, if the table prefix is set to </p>
<p>'cse999_', the user table will be named 'cse999_user'.</p>
<p class="centerbox secondb">Database configuration is required only if a database is needed. The base cl/site system
does not utilize the database for any functions other than logging and will function without a database installed. Most other
subsystems, particularly cl/users and cl/course, are dependent on database functions and require a configured database.</p>

<h2>Optional Configurations</h2>

<h3>Increased Error Reporting</h3>
<p>It is common that web servers will disable some error reporting. Uncomment the following lines in site.php to increase the error reporting:</p>
<pre class="code">//ini_set('display_errors',1);
//ini_set('display_startup_errors',1);
//error_reporting(E_ALL);</pre>
<h3>Sandbox configuration</h3>
<p>It is useful when developing a site to have a web server running locally so the site can be tested prior to pushing to an online site. This is commonly referred to as 'running in a sandbox'. Usually the hostname when running the sandbox will be something like 'localhost' or 'cse999.localhost'. Since the configuration in the sandbox may vary from the runtime installation, some conditional logic is required in site.php. For example:</p>
<pre class="code">$host = $_SERVER['HTTP_HOST'];
if(strpos($host, 'localhost') !== false) {
	$site-&gt;sandbox = true;
	$site-&gt;root = '';
	$site-&gt;db-&gt;configure('mysql:host=127.0.0.1;dbname=cse999',
		'cse999',
		'cse999',
		'local-password',
		'localprefix_');
} else {
	$site-&gt;root = '/~cse999';
	$site-&gt;db-&gt;configure('mysql:host=mysql.server.edu;dbname=cse999',
		'cse999',
		'cse999',
		'runtime-password',
		'runtimeprefix_');
}</pre>
<h3>Cookie prefix</h3>
<p>An optional cookie prefix can be provided. If a web server is used for more than one site, cookiePrefix should be set to a unique value for each site. This prevents ambiquity as to what site the cookie is used for. A recommended cookie prefix is the course name as in 'cse999_'.</p>
<pre class="code">// Prefix to add to cookie names. Recommended if site has more than
// one course on it.
$site-&gt;cookiePrefix = 'cse999_';</pre>
<h3>Timezone</h3>
<p>If the server PHP timezone is not set to local time by default, site.php is a good place to set it:</p>
<pre class="code">// Set the time zone
date_default_timezone_set('America/Detroit');</pre>
<h3>Config directory</h3>
<p>The site config directory is where site configuration files other than site.php are stored. The default is 'site'. A common alternative is 'course':</p>
<pre class="code">$site-&gt;config = 'course';
</pre>
<h3>Decor directory</h3>
<p>Decor files are used to modify the appearance of standard site pages by adding content. By default, decor pages are stored in the directory site. It is common that these may be placed in a different directory, such as course/decor:</p>
<pre class="code">$site-&gt;decor = 'course/decor';
</pre>
<h3>Custom Appearance</h3>
<p>The appearance of CourseLib pages can be customized using an installed appearance component. An example installed appearance component is:</p>
<p class="center"><a href="msu.zip"><img src="../../vendor/cl/site/img/archiveicon.png"></a> <a href="msu.zip">msu.zip</a></p>
<p>To install this example appearance, unzip it into the course root directory and require the file msu.php:</p>
<pre class="code">require __DIR__ . '/msu/msu.php';
</pre>
<p>Then add this line of code to utilize the installed appearance:</p>
<pre class="code">$site-&gt;appearance = new MSUAppearance();
</pre>

<?php echo $view->footer(); ?>
</body>
</html>
