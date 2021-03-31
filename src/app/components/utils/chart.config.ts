import { ChartOptions } from 'chart.js';


export const PIE_CHART_OPTIONS : ChartOptions = {
  responsive: true,
  legend: {
    position: 'top',
  },
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        const label = ctx.chart.data.labels[ctx.dataIndex];
        return label;
      },
    },
  }
};

export const CHART_COLORS = [
  {
    backgroundColor: [
      'rgba(0,255,0,0.3)', 
      'rgba(153,51,102,0.85)', 
      'rgba(0,0,255,0.3)',
      'rgba(128,0,255,0.3)',
      'rgba(0,128,255,0.3)',
      'rgba(255,56,255,0.3)',
      'rgba(255,200,0,0.75)',
    ],
  },
];