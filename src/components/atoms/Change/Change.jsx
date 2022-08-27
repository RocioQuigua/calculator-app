import React from 'react';

import { Slider, Row, Col } from 'antd';

export const Change = () => {
  return (
    <div className='change'>
      <h1>calc</h1>
      <div className='change'>
        <Row>
          <Col>
          <Slider min={1} max={3} />
          </Col>
        </Row>
      </div>
    </div>
  );
};