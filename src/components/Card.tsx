import moment from 'moment';
import React from 'react';

type Props = {
  timestamp: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
};

const Card = ({
  timestamp,
  open,
  high,
  low,
  close,
  volume
}: Props) => {
  const formattedMonth = moment(timestamp).format('MMM');
  const formattedDay = moment(timestamp).format('DD');
  const formattedYear = moment(timestamp).format('YYYY');
  const formattedTime = moment(timestamp).format('h:mm a');
  return (
    <div className="bg-white shadow-md rounded-md p-2 flex gap-8 border border-neutral-50">
      <div className="flex flex-col space-y-2 px-4 justify-center items-center border-r-2 border-neutral-200">
        <h2 className="font-bold text-lg">
          {formattedMonth}
        </h2>
        <h2 className="font-bold text-3xl">
          {formattedDay}
        </h2>
        <h2 className="font-bold text-lg">
          {formattedYear}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-8 p-1">
        <div className="flex flex-col">
          <div className="text-gray-500">Open</div>
          <div className="font-bold text-blue-500">{parseFloat(open).toFixed(2)}</div>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-500">Close</div>
          <div className="font-bold text-purple-500">{parseFloat(close).toFixed(2)}</div>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-500">High</div>
          <div className="font-bold text-green-500">{parseFloat(high).toFixed(2)}</div>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-500">Low</div>
          <div className="font-bold text-red-500">{parseFloat(low).toFixed(2)}</div>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-500">Volume</div>
          <div className="font-bold">{parseInt(volume).toLocaleString()}</div>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-500">Time</div>
          <div className="font-bold">{formattedTime}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
