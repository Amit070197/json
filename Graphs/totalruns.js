
fetch('../json/total_runs.json')
    .then(response => response.json())
    .then(function (obj) {
       
      Highcharts.chart('container3', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Total runs by each team'
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
                name: 'Total runs',
                colorByPoint:true,
                data: obj,
            dataLabels: {
                    enabled: true,
                    rotation: 0,
                    color: '#FFFFFF',
                    align: 'center',
                    // format: '{point.y:f}', // one decimal
                    y: 0, // 10 pixels down from the top
                    style: {
                        fontSize: '10px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            }]
        });
    });