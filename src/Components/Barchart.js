import React from 'react'
import {Bar} from 'react-chartjs-2'

const Barchart = () => {
    return (
        <div>
           <Bar
           data={{labels: ['2016', '2017', '2018', '2019', '2020', '2021']
                 , datasets : [
                     {
                       label: 'number of students Male',
                       data : [100, 500, 800, 740, 255,90],
                       backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                       ],
                       borderColor : [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                       ],
                       borderWidth: 1,
            },
            { label: 'number of students Female',
            data : [100, 500, 800, 740, 255,90],
            backgroundColor:['orange', 'red', 'green', 'grey', 'baige', 'white' ],
            borderColor :['blue'],
            borderWidth: 1
         }
        ]
        }}
           height={200}
           width={200}
           options={{
               maintainAspectRatio:false,
               scales:{
                   yAxes: [
                       {
                           ticks: {
                               beginAtZero: true,
                           },
                       }
                   ]

               }
        }}
           /> 
        </div>
    )    
}

export default Barchart
