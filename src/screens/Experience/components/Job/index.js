import React from 'react';

export const Job = ({ title, place, desc, date }) => {
  const { ini, end } = date;

  return (
    <li>
      <div className="job-title">{title}</div>{' '}
      <div className="job-place">{place}</div>
      <div className="job-date">
        {ini} - {end}
      </div>
      <div className="job-description">{desc}</div>
    </li>
  );
};
