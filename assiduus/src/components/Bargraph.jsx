import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const Bargraph = () => {
  const svgRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const data = [
      { date: '2023-01-01', value: 5 },
      { date: '2023-01-10', value: 15 },
      { date: '2023-01-15', value: 5 },
      { date: '2023-01-20', value: 3 },
      { date: '2023-01-25', value: 10 },
      { date: '2023-01-30', value: 12 }
    ];

    const margin = { top: 20, right: 10, bottom: 60, left: 10 };
    const width = 500 - margin.left - margin.right;
    const height = 250 - margin.top - margin.bottom;

    const parseDate = d3.timeParse('%Y-%m-%d');
    const formatDate = d3.timeFormat('%b %d-%y');

    const x = d3.scaleBand().range([0, width]).padding(0.6);
    const y = d3.scaleLinear().range([height, 0]);

    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    data.forEach((d) => {
      d.date = parseDate(d.date);
      d.formattedDate = formatDate(d.date);
      d.value = +d.value;
    });

    x.domain(data.map((d) => d.formattedDate));
    y.domain([0, d3.max(data, (d) => d.value)]);

    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.formattedDate))
      .attr('y', (d) => y(d.value))
      .attr('width', x.bandwidth() - 5)
      .attr('height', (d) => height - y(d.value))
      .attr('rx', 5)
      .attr('fill', 'rgb(84,184,72)');

    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).tickSize(0))
      .selectAll('text')
      .attr('transform', 'rotate(0)')
      .style('text-anchor', 'end');
    svg.select('.x-axis path').style('display', 'none');

    svg.selectAll('.y-axis text').style('text-anchor', 'middle');
    svg.selectAll('.x-axis line').remove();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ background: 'white' }}>
      <div className='second-bargraph'>
        <b>Invoices owed to you</b>
        <Button onClick={openModal} variant="contained" color="primary">
          New Sales Invoice
        </Button>
      </div>
      <hr />
      <svg className='bargraph-lower-div' ref={svgRef}></svg>

      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="file-upload-modal"
      >
        <Box className='modal'  sx={{ width: 300, padding: 2}}>
          <h2 id="file-upload-modal">Upload Sales Invoice</h2>
          <Input type='file' />
          <Button onClick={closeModal} variant="contained" color="primary">
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Bargraph;
