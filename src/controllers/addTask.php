<?php
// Using database connection file here
include('configuration.php'); 
    
    // Save form data
    if (!empty($_POST['name']))
    {
        $name =  $_POST['name'];
        $start_date =  $_POST['start_date'];
        $end_date = $_POST['end_date'];
        
    $stmt = $db->prepare("INSERT INTO tasks (name, start_date, end_date) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $sdate, $edate);

    // Set parameters and execute
    $name = $name;
    $sdate = $start_date;
    $edate = $end_date;
  
    if(!$stmt->execute()) 
        echo "<span style='color:white'>Error while adding project</span>";
    else{
        $stmt->close();
        // Close database connection
        $db->close(); 
    
        echo "Project added successfully";
        // Redirects to home page
        header("<location:src>
        <pages>ManageTasks.js"); 

    exit;
    } 
    }
?>