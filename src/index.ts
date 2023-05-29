import * as d3 from 'd3';

const temperatureValue = 25;
const humidityValue = 50;

function updateTemperatureBar(value: number) {
    const temperatureBar = d3.select('#temperature-bar');

    temperatureBar
        .style('width', `${value}%`)
        .text(`${value}°C`);
}

function updateHumidityGauge(value: number) {
    const humidityGauge = d3.select('#humidity-gauge');

    humidityGauge
        .style('transform', `rotate(${value * 1.8 - 90}deg)`)
        .text(`${value}%`);
}

updateTemperatureBar(temperatureValue);
updateHumidityGauge(humidityValue);
