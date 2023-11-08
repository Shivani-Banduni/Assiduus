import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const WaveChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const svgWidth = 500;
    const svgHeight = 200;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;
    const amplitude = 50;
    const frequency = 0.2; // Adjust frequency for a complete wave within the range
    const minValue = 4;
    const maxValue = 18;

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top + height / 2})`); // Start from the middle of the y-axis

    const xScale = d3.scaleLinear()
      .domain([minValue, maxValue])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([-amplitude, amplitude])
      .range([height / 2, -height / 2]); // Adjusted to start from half of the height for upper and lower side wave

    const waveData = d3.range(minValue, maxValue + 0.1, 0.1).map((x) => {
      return {
        x: xScale(x),
        y: yScale(amplitude * Math.sin(frequency * (x - minValue)))
      };
    });

    const lineGenerator = d3.line()
      .x(d => d.x)
      .y(d => d.y)
      .curve(d3.curveBasis);

    // Draw the upper and lower side wave path
    svg.append('path')
      .datum(waveData)
      .attr('d', lineGenerator)
      .attr('stroke', 'green')
      .attr('stroke-width', 2)
      .attr('fill', 'none');

    // Add x-axis at the middle
    svg.append('g')
      .call(d3.axisBottom(xScale));

  }, []);

  return <div ref={chartRef}></div>;
};

export default WaveChart;
