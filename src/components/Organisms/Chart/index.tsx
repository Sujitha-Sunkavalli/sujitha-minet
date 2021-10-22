import React from 'react'
// import Highcharts from 'highcharts/highstock';
import Highcharts from "highcharts"
import HighchartsReact from 'highcharts-react-official';
import {priceData} from './btcdata';
export const Chart=(props:HighchartsReact.Props)=>{
const options = {
    title: {
      text: "My stock chart"
    },
    rangeSelector: {
        buttons: [{
            type: 'day',
            count: 1,
            text: '1d',
          }, {
            type: 'day',
            count: 7,
            text: '7d'
          }, {
            type: 'month',
            count: 1,
            text: '1m'
          }, {
            type: 'month',
            count: 3,
            text: '3m'
          },
          {
            type: 'all',
            text: 'All'
          }],
          selected: 4
        },
        series: [{
          name: 'Price',
          type: 'spline',
    
          data: priceData,
          tooltip: {
            valueDecimals: 2
          },
          plotOptions: {
            area: {
                allowPointSelect: true,
                states: {
                    select: {
                        borderColor: 'primary',
                        fillColor:"orange",
                        background:"#FFA74F",
                    }
                }
            }
        },
        }
    ]  
}
 return(
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        {...props}
      />
    </div>
  );
}
