<!DOCTYPE html>
<head>
<title>Math Problems</title>
<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
<link rel='stylesheet' href='style.css' type='text/css' media='all' />
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
</head>

<body>
	<div id="main">
		<div id="content">
		</div>
		<div id="sidebar">
			<label>What should be the highest number in the equations?</label>
			<input class="maxNumber" type="text" pattern="\d*" placeholder="Highest Number"/>
			<label>How many questions do you want?</label>
			<input class="howMany" type="text"  pattern="\d*" placeholder="How Many Questions"/>
			<label>What kind of equations do you want?</label>
			<input type="radio" name="operator" value="-"/> -
			<input type="radio" name="operator" value="+"/> +
			<input type="radio" name="operator" value="*"/> x
			<input type="radio" name="operator" value="/"/> /
			<label><input type="checkbox" name="algebra" value="yes"/> Basic Algebra format</label>

			<p><a class="btn maxNumber-submit">Create Equations</a></p>
		</div>

	</div>


<script type='text/javascript' src='scripts.js'></script>
</body>
</html>
