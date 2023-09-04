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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



const LineChart = (props: any) => {
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
        labels: data[1].price_chart_data.map((elem: any) =>
            moment(elem[0]).format('DD.MM.YY'),
        ),
        datasets: [{
            label: data[1].name.charAt(0).toUpperCase() + data[1].name.slice(1),
            data: data[1].price_chart_data.map((elem: any) =>
                elem[1],
            ),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132, 0.5)',
        }],
    }
    return <Line options={options} data={chartData} width='100%' height='20%' />
}

export default LineChart;