
//morris area chart

$(function () {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2021 Q1',
            beypazari: 2666,
            sirma: null,
            uludag: 2647
        }, {
            period: '2021 Q2',
            beypazari: 2778,
            sirma: 2294,
            uludag: 2441
        }, {
            period: '2021 Q3',
            beypazari: 4912,
            sirma: 1969,
            uludag: 2501
        }, {
            period: '2021 Q4',
            beypazari: 3767,
            sirma: 3597,
            uludag: 5689
        }, {
            period: '2022 Q1',
            beypazari: 6810,
            sirma: 1914,
            uludag: 2293
        }, {
            period: '2022 Q2',
            beypazari: 5670,
            sirma: 4293,
            uludag: 1881
        }, {
            period: '2022 Q3',
            beypazari: 4820,
            sirma: 3795,
            uludag: 1588
        }, {
            period: '2022 Q4',
            beypazari: 15073,
            sirma: 5967,
            uludag: 5175
        }, {
            period: '2023 Q1',
            beypazari: 10687,
            sirma: 4460,
            uludag: 2028
        }, {
            period: '2023 Q2',
            beypazari: 8432,
            sirma: 5713,
            uludag: 1791
        }],
        xkey: 'period',
        ykeys: ['beypazari', 'sirma', 'uludag'],
        labels: ['beypazari', 'sirma', 'uludag'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });
    //morris donut chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Zonguldak",
            value: 12
        }, {
            label: "Ankara",
            value: 30
        }, {
            label: "Kocaeli",
            value: 20
        }],
        resize: true
    });
    //morris bar chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2019',
            a: 100,
            b: 90
        }, {
            y: '2020',
            a: 75,
            b: 65
        }, {
            y: '2021',
            a: 50,
            b: 40
        }, {
            y: '2022',
            a: 75,
            b: 65
        }, {
            y: '2023',
            a: 50,
            b: 40
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Mandalin', 'Portakal'],
        hideHover: 'auto',
        resize: true
    });
    //morris line chart
    Morris.Line({
        element: 'morris-line-chart',
        data: [{
            y: '2018',
            a: 100,
            b: 90
        }, {
            y: '2019',
            a: 75,
            b: 65
        }, {
            y: '2020',
            a: 50,
            b: 40
        }, {
            y: '2021',
            a: 75,
            b: 65
        }, {
            y: '2022',
            a: 50,
            b: 40
        }, {
            y: '2023',
            a: 75,
            b: 65
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Lipton İce Tea Şeftali', 'Lipton İce Tea Limon'],
        hideHover: 'auto',
        resize: true
    });

});
