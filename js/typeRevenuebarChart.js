		var barChartData = {
			labels : ["Services","Licenses","Recurring"],
			datasets : [
				{
					fillColor : "#004ba8",
					strokeColor : "#eee",
					data : [1358885,370275,72500]
				}
			]
			
		}

	var myLine = new Chart(document.getElementById("typeRevenue").getContext("2d")).Bar(barChartData);