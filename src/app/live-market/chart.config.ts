import { ChartType } from "ng-apexcharts";

export const chartBarDefaultOptions = {
  chart: {
    height: 160,
    type: 'bar' as ChartType,
    foreColor: '#F5B041',
    brush: {
      enabled: true,
      target: "candles"
    },
    selection: {
      enabled: true,
      fill: {
        color: '#FF9933',
        opacity: 0.2
      },
      stroke: {
        width: 1,
        dashArray: 3,
        color: '#FF6600',
        opacity: 0.4
      },
    }
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    bar: {
      columnWidth: "80%",
      colors: {
        ranges: [
          {
            from: -1000,
            to: 0,
            color: "#FF0033"
          },
          {
            from: 1,
            to: 10000,
            color: "#33FF33"
          }
        ]
      }
    }
  },
  stroke: {
    width: 0
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    labels: {
      show: false
    }
  }
};

export const chartCandleDefaultOptions = {
  chart: {
    type: "candlestick",
    height: 290,
    id: "candles"  as ChartType,
    foreColor: '#F5B041',
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    },
    selection: {
      enabled: true,
      type: 'x',
      fill: {
        color: '#FF9933',
        opacity: 0.2
      },
      stroke: {
        width: 1,
        dashArray: 3,
        color: '#FF6600',
        opacity: 0.4
      },
    }
  },
  plotOptions: {
    candlestick: {
      wick: {
        useFillColor: true,
      }
    }
  },
  xaxis: {
    type: "datetime",
  },
};
