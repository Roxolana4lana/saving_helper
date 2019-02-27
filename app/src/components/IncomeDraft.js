import React from 'react';

// Step 2 - Including the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts';

// Step 4 - Including the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';

// Step 5 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 6 - Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


// Step 8 - Creating the DOM element to pass the react-fusioncharts component
class IncomeDraft extends React.Component {

    constructor() {
        super()
        this.state = {
            incomes: []
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/incomes/')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    incomes: data
                })
            })
    }
    
    render() {
        const dataArr = this.state.incomes.map((income) => {
            return {
                label: income.from_where,
                value: income.amount
            }
        });
        const chartConfigs = {
            type: 'column2d',// The chart type
            width: '75%', // Width of the chart
            height: '60%', // Height of the chart
            dataFormat: 'json', // Data type
            dataSource: {
                // Chart Configuration
                "chart": {
                    "caption": "Wykres wydatków",
                    "subCaption": "",
                    "xAxisName": "Wydatki",
                    "yAxisName": "złotówki",
                    "numberSuffix": "",
                    "theme": "fusion",
                },
                // Chart Data

                "data": dataArr
            }
        };

        return (
            <ReactFC
                {...chartConfigs} />
        );
    }
}

export default IncomeDraft