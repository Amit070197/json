
fetch('../json/top_batsman.json')
.then(response => response.json())
.then(function (obj) {
  
  Highcharts.chart('container1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Top Batsman of RCB'
        },
        subtitle: {
            // text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Runs'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Total runs: <b>{point.y:f} </b>'
        },
        series: [{
            name: 'Population',
            colorByPoint:true,
            data: obj,
        dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#FFFFFF',
                align: 'center',
                format: '{point.y:f}', // one decimal
                y: 0, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
});