import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { ILineChartProps } from '../../../common/types/assets';
import React from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



const LineChart: React.FC<ILineChartProps> = (props: ILineChartProps) => {
    const {data} = props;
    const options = {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
    };
    const chartData = {
        labels: data[0].price_chart_data.map((element: any) =>
            moment(element[0]).format('DD.MM.YY'),
        ),
        datasets: [{
            label: data[0].name.charAt(0).toUpperCase() + data[0].name.slice(1),
            data: data[0].price_chart_data.map((elem: any) =>
                elem[1],
            ),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132, 0.5)',
        }],
    }
    return <Line options={options} data={chartData} width='100%' height='20%' />
}

export default LineChart;