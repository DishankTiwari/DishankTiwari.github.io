<!DOCTYPE html>
<html>
<head>
  <title>HTML_CSS_DOM</title>
  <link rel="stylesheet" type="text/css" href="format.css">
  <script src="basic_DOM.js"></script>
</head>
<body>
		<div id="tab" class="relative">
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
      <form  id="sub_form" name="form1name" method="post">
        <table cellspacing="12">
          <tr>
            <td>Name</td>
            <td><input type="text" name="name" id="name"></td>
            <td >Country</td>
            <td><select id="country" name="country">
              <option value=""> </option>
              <option value="India">India</option>
              <option value="US">US</option>
            </select>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td><input type="text" name="email" id="email"></td>
          </tr>
          <tr>
            <td>Contact No.</td>
            <td><input type"number" name="number" id="number"></td>
            <td>Description</td>
            <td><textarea name="description" type="textbox" id="description"></textarea></td>
          </tr>
          <tr>
            <td>Sex</td>
            <td><input type="radio" name="sex" value="male">Male
            <input type="radio" name="sex" value="female">Female</td>
            </tr>
            <tr>
              <td>Interest</td>
              <td><input type="checkbox" name="interest[]" value="Football"id="interest">Football
                <input type="checkbox" name="interest[]" value="Movie" id="interest" onclick="movieType();">Movie
                <input type="checkbox" name="interest[]" value="Reading" id="interest">Reading </td>
            </tr>
          </table>
          <button type="reset" value="Reset" class="buttons resetButtons">RESET</button>
          <button type="button" name="submit" onclick="csv()" id="subscribe" class="buttons submitButton">SUBMIT</button>
        </div>
      </form>
      
    </div>
     <div class="error" id="mySpan"></div>
     </div>
    
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