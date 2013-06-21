
		var doughnutData = [
				{
					value: 80,
					color:"rgb(1, 189, 224)"
				},
				{
					value : 20,
					color : "rgb(53, 142, 201)"
				}
			];

	var myDoughnut = new Chart(document.getElementById("q4pipeline").getContext("2d")).Doughnut(doughnutData);