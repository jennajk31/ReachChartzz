
		var doughnutData = [
				{
					value: 46,
					color:"#00a0e8"
				},
				{
					value : 54,
					color : "#004ba8"
				}
			];

	var myDoughnut = new Chart(document.getElementById("q4pipeline").getContext("2d")).Doughnut(doughnutData);