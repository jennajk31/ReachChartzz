
		var pieData = [
				{
					value: 30,
					color:"rgb(22, 86, 129)"
				},
				{
					value : 50,
					color : "#E0E4CC"
				},
				{
					value : 100,
					color : "#69D2E7"
				}
			
			];

	var myPie = new Chart(document.getElementById("Resources").getContext("2d")).Pie(pieData);