$(function () {
	$(document).scroll(function () {
	  var $nav = $(".fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
  });

  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
	var data = google.visualization.arrayToDataTable([
	  ["Contribution", "%"],
	  ["Josh", 70],
	  ["Jack", 15],
	  ["Jarod", 15],
	]);

	var options = {
	  pieHole: 0.3,
	  titlePosition: "none",
	  colors: ["#f03c3c", "#f07e3c", "#f03c72"],
	};

	var chart = new google.visualization.PieChart(
	  document.getElementById("piechart")
	);

	chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(drawChart2);

  function drawChart2() {
	var data = google.visualization.arrayToDataTable([
	  ["Contribution", "%"],
	  ["Josh", 25],
	  ["Jack", 45],
	  ["Jarod", 30],
	]);

	var options = {
	  pieHole: 0.3,
	  titlePosition: "none",
	  colors: ["#f03c3c", "#f07e3c", "#f03c72"],
	};

	var chart = new google.visualization.PieChart(
	  document.getElementById("piechart2")
	);

	chart.draw(data, options);
  }