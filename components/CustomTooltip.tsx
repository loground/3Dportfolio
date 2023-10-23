import React from 'react';

interface CustomTooltipProps {
  tooltipTextToDisplay: string;
  position: { top: number; left: number };
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ tooltipTextToDisplay, position }) => {
  return (
    <div
      className="absolute z-50 bg-gray-800 text-xl text-white text-xs md:py-4 px-3 rounded shadow whitespace-nowrap"
      style={{ top: position.top, left: position.left }}>
      {tooltipTextToDisplay}
    </div>
  );
};

export default CustomTooltip;
