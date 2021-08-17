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
            }
	]
        });

</script>

