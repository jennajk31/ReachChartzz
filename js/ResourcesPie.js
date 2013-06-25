
		var pieData = [
				{
					value: 10,
					color:"#0f3e78"
				},
				{
					value : 26,
					color : "#E0E4CC"
				},
				{
					value : 18,
					color : "#00a0e8"
				},
				{
					value : 100,
					color : "#000000"
				}
				
			
			];

	var myPie = new Chart(document.getElementById("Resources").getContext("2d")).Pie(pieData);