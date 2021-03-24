
fetch('../json/no_of_foreign_umpires.json')
.then(response => response.json())
.then(function (obj) {
  
  Highcharts.chart('container4', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Total Number of Foreign Umpires by country'
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
                text: ''
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Total Umpires: <b>{point.y:f} </b>'
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
                    fontSize: '10px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
});