import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const CashFlow = () => {
  const svgRef = useRef();

  useEffect(() => {
    const data = [
      { date: 'August 01', value1: 3, value2: 3 },
      { date: 'September 01', value1: 6, value2: 8 },
      { date: 'October 01', value1: 8, value2: 4 },
      { date: 'November 01', value1: 5, value2: 3 },
      { date: 'December 01', value1: 5, value2: 5 },
      { date: 'January 01', value1: 3, value2: 3 }
    ];

    const margin = { top: 50, right: 10, bottom: 60, left: 10 };
    const width = 480 - margin.left - margin.right;
    const height = 250 - margin.top - margin.bottom;

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.date))
      .range([0, width])
      .paddingInner(0.62)
      .paddingOuter(0.2);

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

    data.forEach((d) => {
      d.value = d.value1 + d.value2;
    });

    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.date))
      .attr('y', (d) => y(d.value))
      .attr('width', x.bandwidth() - 5)
      .attr('height', (d) => height - y(d.value))
      .attr('rx', 5)
      .attr('fill', 'rgb(85,188,126)'); // In color

    svg
      .selectAll('.out-bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'out-bar')
      .attr('x', (d) => x(d.date))
      .attr('y', (d) => y(d.value1))
      .attr('width', x.bandwidth() - 5)
      .attr('height', (d) => y(d.value2))
      .attr('rx', 7) // Rounded corners
      .attr('fill', 'rgb(84,184,72)'); // Out color

    // X-axis
    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).tickSize(0))
      .selectAll('text')
      .attr('transform', 'rotate(-25)')
      .style('text-anchor', 'end');

    // Hide x-axis line
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
    <div style={{ background: 'white' }}>
      <div className='second-bargraph'>
        <b>Total Cash Flow</b>
        <button>New Transaction</button>
      </div>
      <hr />
      <svg className='bargraph-lower-div' ref={svgRef}></svg>
    </div>
  );
};

export default CashFlow;
