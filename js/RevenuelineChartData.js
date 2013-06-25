		var lineChartData = {
			labels : ["Jan","Feb","March","April","May","June","July", "Aug", "Sept", "Oct", "Nov", "Dec"],
			datasets : [
				{
					fillColor : "#00a0e8",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [150,550,834,1193,1820,2756,3192,3778,4373,4968,5534,6437]
				},
				{
					fillColor : "#004ba8",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [380.1,512.1,1109.7,1344.5,1801.7]
				}
			]
			
		}

	var myLine = new Chart(document.getElementById("Revenue").getContext("2d")).Line(lineChartData);