import React from 'react';
import PropTypes from 'prop-types';

const RicardianMeta = ({
  title,
  icon,
  summary
}) => {
  return (
    <div>
      {
        title &&
        <h1>
          {icon && <img src={icon} style={{height: 50, width: 50}} alt={icon}/>}
          {title}
        </h1>
      }
      {
        summary &&
        <h2>
          {summary}
        </h2>
      }
    </div>
  );
}

RicardianMeta.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  summary: PropTypes.string
}

export default RicardianMeta;