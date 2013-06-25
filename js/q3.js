		var doughnutData = [
				{
					value: 100,
					color:"#00a0e8"
				},
				{
					value : 0,
					color : "#004ba8"
				}
			];

	var myDoughnut = new Chart(document.getElementById("q3pipeline").getContext("2d")).Doughnut(doughnutData);