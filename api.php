<?php 
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "callcenter";
$password = "ca11c3nt3r";
$database = "callcenter";

// Create connection
$conn = mysqli_connect($servername, $username, $password,$database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
//echo "Connected successfully";

$method = "";
$tenantid = "";
if (!empty($_POST['method'])){
    $method = $_POST['method'];

    if ($method == 1){
        //select method
        if(!empty($_POST['tenantid'])){
            $tenantid = $_POST['tenantid'];
            $sql = "SELECT * FROM content WHERE tenant_id = ".$tenantid;
            $result = $conn->query($sql);
            $output = array();

            if ($result->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_assoc()) {
                $output[] = $row;
                    //echo $sql;
                //successful
                }
                echo json_encode($output);
            }else{
                echo 2;//error on db
            }  
    }

}//end

?>