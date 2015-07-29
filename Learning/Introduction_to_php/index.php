<!DOCTYPE html>
<html>
<head>
  <title>HTML_CSS_DOM</title>
  <link rel="stylesheet" type="text/css" href="format.css">
  <script src="basic_DOM.js"></script>
  <?php
  $name_error = $email_error = $country_error = $description_error = $sex_error = $interest_error = $number_error = "";
  $name = $email = $country = $description = $sex = $interest = $number = $message = "";
  $Flag=0;
  if ($_SERVER["REQUEST_METHOD"] == "POST") { $Flag=1;
    if (empty($_POST["name"])) {
      $name_error = "Name is required";
      $Flag = 0;
    }
    else {
      $name = value($_POST["name"]);
    }
    if (empty($_POST["email"])) {
      $email_error = "Email is required";
      $Flag = 0;
    }
    else {
      $email = value($_POST["email"]);
      if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $email_error = "Invalid Email";
      }
    }
    if (empty($_POST["country"])) {
      $country_error = "Required";
      $Flag = 0;
    }
    else {
      $country = value($_POST["country"]);
    }
    if (empty($_POST["description"])) {
      $description_error = "Required";
      $Flag = 0;
    }
    else {
      $description = value($_POST["description"]);
    }
    if (empty($_POST["sex"])) {
      $sex_error = "Sex is required";
      $Flag = 0; 
    }
    else {
      $sex = value($_POST["sex"]);
    }
    if (empty($_POST["interest"])) {
      $interest_error = "Required";
      $Flag = 0;
    }
    else {
      $interest = value($_POST["interest"]);
    }
    if (empty($_POST["number"])) {
      $number_error = "Number is required";
      $Flag = 0;
    }
    else {
      $number = value($_POST["number"]);
      if(!preg_match("/^[789][0-9]{9}$/", $number)){
        $number_error = "Invalid Number";
      }
    }
  }
  function value($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
    if($Flag == 1){
    $data = "$name, $email, $number, $country, $sex, $interest,$description \n";
    $myf = fopen("/home/dishanktiwari/DishankTiwari.github.io/Learning/Introduction_to_php/details.csv", "a");
    fwrite($myf, $data);
    fclose($myf);
    $message = "Registered Successfully";  
    }
  ?>
</head>
<body>
		<div id="tab" class="relative">
    <span class="check"><?php echo $message;?></span>
    <div onclick="tab1()" id="news" class="tabs tab_1"><center>News</center> </div>  
    <div onclick="tab2()" id="sub" class="tabs tab_2"><center>Subscribe</center></div>
    <div id="left" class="welcome">
      <h1>Welcome</h1>
      <p>Simple and effective AngularJS bindings for FusionCharts JavaScript Charting Library. Simple and effective AngularJS bindings for FusionCharts JavaScript Charting Library.</p>
   		<p style="color:#09569d">AngularJS bindings for FusionCharts JavaScript Charting Library</p>
    </div>
    <div id="right" class="latestNews">
    	<h1>Latest News</h1>
    	<img src="image.jpg">
    </div>
    <button type="submit" id="lern" class="buttons learnMore">LEARN MORE</button>
    <div id="form" class="form1">
      <h1>Subscription Form</h1>
      <form  id="sub_form" name="form1name" method="post" action = "<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        <table cellspacing="12">
          <tr>
            <td>Name</td>
            <td><input type="text" name="name" value="<?php echo $name;?>" id="name"><span>* <?php echo $name_error;?></span></td>
            <td >Country</td>
            <td><select id="country" name="country" value="<?php echo $country;?>">
              <option value=""> </option>
              <option value="India" <?php if ($country == "India") { echo " selected"; } ?>>India</option>
              <option value="US" <?php if ($country == "US") { echo " selected"; } ?>>US</option>
            </select> <span>* <?php echo $country_error;?></span>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td><input type="text" name="email" value="<?php echo $email;?>" id="email"><span>* <?php echo $email_error;?></span></td>
          </tr>
          <tr>
            <td>Contact No.</td>
            <td><input type"number" value="<?php echo $number;?>" name="number"><span>* <?php echo $number_error;?></span></td>
            <td>Description</td>
            <td><textarea name="description" value="<?php echo $description;?>" type="textbox"></textarea><span>* <?php echo $description_error;?></span></td>
          </tr>
          <tr>
            <td>Sex</td>
            <td><input type="radio" name="sex" <?php if (isset($sex) && $sex=="male") echo "checked";?> value="male">Male
            <input type="radio" name="sex"  <?php if (isset($sex) && $sex=="female") echo "checked";?> value="Female">Female <span>*<?php echo $sex_error;?></span></td>
            </tr>
            <tr>
              <td>Interest</td>
              <td><input type="checkbox" name="interest" <? if (isset($interest) && $interest=="Football") echo "checked"; ?> value="Football">Football
                <input type="checkbox" name="Interest" <? if (isset($interest) && $interest=="Movie") echo "checked"; ?> value="Movie" onclick="movieType();">Movie
                <input type="checkbox" name="Interest" <? if (isset($interest) && $interest=="Reading") echo "checked"; ?> value="Reading" >Reading <span>* <?php echo $interest_error;?></span></td>
            </tr>
          </table>
          <button type="reset" value="Reset" class="buttons resetButtons">RESET</button>
          <input type="submit" name="submit" value="Submit" id="subscribe" class="buttons submitButton"><?php if (isset($_POST['submit'])) { echo "<script type='text/javascript'>tab2();</script>"; } ?>
        </div>
      </form>
      
    </div>
     <span class="check"><?php echo $message; ?></span>
    <div id="movieType">
            <div>
              <h5>Choose You Movie Type:</h5>
              <input type="checkbox">Comedy
              <input type="checkbox">Action
              <input type="checkbox">Romantic
              <button onclick="movieType();">SELECT</button>
            </div>
          </div>
</body>
</html>