<?
if (isset($_GET['password']))
{
$password=$_GET['password'];
echo ("La tua password è: " . $password);
}
else{
	echo("Non hai specificato nessuna password");
}
?>