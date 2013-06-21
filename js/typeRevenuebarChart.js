		var barChartData = {
			labels : ["Services","Licenses","Recurring"],
			datasets : [
				{
					fillColor : "rgb(12, 112, 179)",
					// strokeColor : "rgba(220,220,220,1)",
					data : [65,59,100]
				}
			]
			
		}

	var myLine = new Chart(document.getElementById("typeRevenue").getContext("2d")).Bar(barChartData);