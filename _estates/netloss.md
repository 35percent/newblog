---
title: Housing stock decline
date: '2021-08-13 00:00:00 -0700'
image: img/clearanceschart.png
layout: page
---
Since 1999, the borough has lost more than 13,000 council homes (see graph below) and the proportion of council housing had fallen from 60% of to [28% of housing stock](https://www.southwark.gov.uk/assets/attach/2683/Southwark_Housing_Key_Stats_October_v2_2015.pdf) by 2015. This is largely the consequence of [Right to Buy](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/759390/LT_685.xlsx) and [void sales](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/561232/LT_648.xlsx), but council estate regeneration is clearly playing its part.

The 11 estates shown represent a total of 8,453 council homes and leasehold properties lost. Southwark does now have an council house building programme, it is [still knocking down and selling off council homes faster than it is building them](https://35percent.org/new-council-homes).

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js">
</script>
<script src="https://code.highcharts.com/highcharts.js">
</script>
<script src="https://code.highcharts.com/modules/exporting.js">
</script>

<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto">
</div>

<script type="text/javascript">

        $('#container').highcharts({
            title: {
                text: "Southwark's Council Homes",
                x: -20 //center
            },
            subtitle: {
                 text: 'Source: <a href="https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/674346/LT_116.xlsx">https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/674346/LT_116.xlsx</a>',
		x: -20
            },
            xAxis: {
                categories: ['1994', '1995', '1996', '1997', '1998', '1999',
                    '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
            },
            yAxis: {
                title: {
                    text: 'Council-owned stock'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ' Council homes'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Southwark',
                data: [55803, 55162, 54439, 53363, 52448, 51706, 50903, 49875, 48052, 46887, 45346, 43885, 42275, 41873, 41287, 40618, 40120, 39845, 39781, 38578, 39029, 38687, 38522, 38553, 38489, 38104, 38183]
            },
	{
                name: 'Camden',
                data: [29520,29249,28969,28976,28212,27678,27083,26797,26007,25690,25492,23921,23997,23517,23707,23860,23665,23596,23630,23508,23508,23256,23197,23075,23173,23446,23226]
            },
	{
                name: 'Islington',
                data: [36902,37489,37404,37010,36582,35853,33020,31827,31012,30439,29415,28015,27448,27046,26485,26372,26340,26328,26256,26235,26264,26053,25847,25290,25009,25336,25303]
            }
	]
        });

</script>

[Source: https://www.gov.uk/government/statistical-data-sets/live-tables-on-dwelling-stock-including-vacants](https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/674346/LT_116.xlsx)

While Southwark still remains the London borough with the highest number of council homes, it has one of the highest populations of all boroughs. Taken as a percentage of the total number of homes in each borough, 17% of homes in Southwark, whereas 24% of homes in Islington are council homes and 21% in Camden.

<div id="comparison" style="min-width: 310px; height: 400px; margin: 0 auto">
</div>

<script type="text/javascript">

        $('#comparison').highcharts({
            title: {
                text: "Southwark's Council Homes",
                x: -20 //center
            },
            subtitle: {
                 text: 'Source: <a href="https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/674346/LT_116.xlsx">https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/674346/LT_116.xlsx</a>',
		x: -20
            },
            xAxis: {
                categories: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
            },
            yAxis: {
                title: {
                    text: 'Council-owned stock as a percentage of overall housing stock'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ' % Council homes'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Southwark',
                data: [33.4,32.5,31.2,29.0,27.0,26.5,23.9,23.1,23.0,20.6,20.7,20.0,19.8,19.3,18.8,18.3,17.9,18.1,17.6]
            },
	{
                name: 'Camden',
                data: [28.70, 27.70,27.10,26.80,25.00,24.90,24.20,24.30,24.20,23.80,23.60,23.50,23.30,23.20,22.80,22.60,22.20,22.10,22.20]
            }
	]
        });

</script>

Source: [https://data.london.gov.uk/dataset/number-and-density-of-dwellings-by-borough](https://data.london.gov.uk/dataset/number-and-density-of-dwellings-by-borough)
