import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const CashFlow = () => {
  const svgRef = useRef();

  useEffect(() => {
    const data = [
      { date: 'August 01', value1: 5, value2: 5 },
      { date: 'September 01', value1: 15, value2: 10 },
      { date: 'October 01', value1: 10, value2: 5 },
      { date: 'November 01', value1: 5, value2: 3 },
      { date: 'December 01', value1: 9, value2: 9 },
      { date: 'January 01', value1: 6, value2: 6 }
    ];

    const margin = { top: 10, right: 40, bottom: 20, left: 50 };
    const width = 300 - margin.left - margin.right;
    const height = 250 - margin.top - margin.bottom;

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.date))
      .range([0, width])
      .paddingInner(0.6) // Adjust padding between bars
      .paddingOuter(0.5); // Adjust padding at the beginning and end of the x-axis

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value1 + d.value2)])
      .nice()
      .range([height, 0]);

    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Bars
    data.forEach((d) => {
      svg
        .append('rect')
        .attr('x', x(d.date))
        .attr('y', y(d.value1 + d.value2))
        .attr('width', x.bandwidth())
        .attr('height', height - y(d.value1 + d.value2))
        .attr('rx', 7) // Rounded corners
        .attr('fill', '#5A9C42'); // Dark green color

      svg
        .append('rect')
        .attr('x', x(d.date))
        .attr('y', y(d.value1))
        .attr('width', x.bandwidth())
        .attr('height', y(d.value2))
        .attr('rx', 7) // Rounded corners
        .attr('fill', '#8CC84B'); // Light green color
    });

    // X-axis
    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).tickSize(0))
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end');
      svg.select('.x-axis path').style('display', 'none');

    // Y-axis (invisible)
    svg
      .append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y).tickSize(0))
      .style('opacity', 0); // Make y-axis invisible

    // Remove x-axis and y-axis lines
    svg.selectAll('.x-axis line').remove();
    svg.selectAll('.y-axis line').remove();
  }, []);

  return (
    <>
      <div className='container'>
        <div>
          <span className='label'>Total Cash Flow</span>
        </div>
        <div className='transactions' style={{ display: 'flex' }}>
          <div className='checkbox'></div>
          <span className='label'>In</span>
          <div className='checkbox'></div>
          <span className='label'>Out</span>
        </div>
      </div>
      <svg ref={svgRef}></svg>
    </>
  );
};

export default CashFlow;
