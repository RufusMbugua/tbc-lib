<html ng-app='research_lab'>

<!-- Head -->
<head>
	<link rel="stylesheet" href="libs/styles/lato.css">
	<link rel="stylesheet" href="libs/styles/semantic.css">
	<link rel="stylesheet" href="dist/styles.css">
	<link rel="stylesheet" href="libs/styles/font-awesome.css">
	<link rel="stylesheet" href="libs/styles/ionicons.css">
	<link rel="stylesheet" href="libs/styles/angular-aside.css">
	<link rel="stylesheet" href="libs/styles/angular-chart.css">
	<link rel="stylesheet" href="libs/styles/leaflet.awesome-markers.css">
	<!-- <link href='https://api.tiles.mapbox.com/mapbox.js/v2.2.1/mapbox.css' rel='stylesheet' /> -->
	<link rel="stylesheet" href="libs/styles/leaflet.css">
	<script src="libs/js/jquery.js"></script>
	<script src="libs/js/angular.js"></script>

    <script src="libs/js/leaflet.js"></script>
		<script src="libs/js/leaflet-src.js"></script>
    <script src="libs/js/angular-leaflet-directive.js"></script>
    <script src="libs/js/leaflet.label.js"></script>
		<script src="libs/js/leaflet.markercluster-src.js"></script>
		<script src="libs/js/leaflet.markercluster.js"></script>

    <link rel="stylesheet" href="libs/styles/leaflet.css" />
    <link rel="stylesheet" href="libs/styles/leaflet.label.css" />
		<link rel="stylesheet" href="libs/styles/slick.css" />
		<link rel="stylesheet" href="libs/styles/slick-theme.css" />
    <link rel="stylesheet" href="libs/styles/MarkerCluster.css" />
    <link rel="stylesheet" href="libs/styles/MarkerCluster.Default.css" />
	<title ng-bind="title"></title>
</head>
<body>
	<!-- Header -->
	<header>

	</header>
	<section ui-view>

	</section>
	<!-- <footer>

</footer> -->

<script src="libs/js/angular-ui-router.js"></script>
<script src="libs/js/lodash.compat.js"></script>
<script src="libs/js/restangular.js"></script>
<script src="libs/js/smart-table.min.js"></script>
<script src="libs/js/Chart.js"></script>
<script src="libs/js/angular-chart.js"></script>
<script src="libs/js/angular-aside.js"></script>
<script src='libs/js/textAngularSetup.js'></script>
<script src='libs/js/textAngular-sanitize.js'></script>
<script src='libs/js/textAngular.js'></script>
<script src='libs/js/moment.js'></script>
<script src='libs/js/angular-moment.js'></script>
<script src='libs/js/headroom.js'></script>
<script src='libs/js/ui-bootstrap-tpls.js'></script>
<script src='libs/js/highcharts.js'></script>
<script src='libs/js/highcharts-ng.js'></script>
<script src='libs/js/jQuery.headroom.js'></script>
<script src='libs/js/rangy-core.js'></script>
<script src='libs/js/rangy-selectionsaverestore.js'></script>
<script src='libs/js/scrollReveal.js'></script>
<script src='libs/js/angular-skrollr.js'></script>
<script src='libs/js/angular-scroll.js'></script>
<script src='libs/js/skrollr.js'></script>
<script src='libs/js/Chart.StackedBar.js'></script>
<script src='libs/js/slick.js'></script>
<script src='libs/js/slick.min.js'></script>

<script src="dist/app.js"></script>
<script src="//localhost:35729/livereload.js"></script>




<script>
Highcharts.setOptions({
	colors: ['#e62020','#2C3E50','#D2D7D3','#F2F1EF'],
	plotOptions: {
		series: {
			dataLabels: {
				enabled: false,
			},
			borderRadius:2,
			borderWidth: 0
		}
	},
	legend:{
		enabled:true
	},
	xAxis:{
		lineWidth: 0,
		minorGridLineWidth: 0,
		lineColor: 'transparent',
		labels: {
			enabled: false
		},
		minorTickLength: 0,
		tickLength: 0
	},
	yAxis:{
  gridLineWidth: 0,
	labels: {
		enabled: false
	}
}
});

</script>
</body>
</html>
