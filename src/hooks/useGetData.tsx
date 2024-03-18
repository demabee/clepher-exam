import { useCallback, useEffect, useState } from 'react';

interface TimeSeriesData {
  timestamp: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

interface GetDataHookResult {
  data: TimeSeriesData[];
  fetchData: () => void;
  loading: boolean;
  expired: ExpiredType
}

type ExpiredType = {
  isExpired: boolean;
  message: string;
}

export default function useGetData(): GetDataHookResult {
  const [data, setData] = useState<TimeSeriesData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [expired, setExpired] = useState<ExpiredType>({
    isExpired: false,
    message: ''
  });

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${process.env.REACT_APP_API_TOKEN}`);
      const jsonData = await res.json();
      if (jsonData['Information']) {
        setExpired({
          isExpired: true,
          message: jsonData['Information']
        });
        return;
      }
      const timeSeriesData = jsonData['Time Series (5min)'];
      const timestamps = Object.keys(timeSeriesData);
      const dataArray = timestamps.map(timestamp => {
        const {
          '1. open': open,
          '2. high': high,
          '3. low': low,
          '4. close': close,
          '5. volume': volume
        } = timeSeriesData[timestamp];
        return { timestamp, open, high, low, close, volume };
      });
      setData(dataArray);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    fetchData,
    loading,
    expired
  }
}
