import useGetData from './hooks/useGetData';
import Card from './components/Card';
import Loading from './components/Loading';
import Expired from './components/Expired';

function App() {
  const { data, loading, expired } = useGetData();
  return (
    <div className="p-5 flex flex-wrap gap-10 items-center justify-center">
      {loading && <Loading />}
      {data?.map((item) => (
        <Card
          timestamp={item.timestamp}
          open={item.open}
          high={item.high}
          low={item.low}
          close={item.close}
          volume={item.volume}
        />
      ))}
      {expired.isExpired && (
        <Expired message={expired.message} />
      )}
    </div>
  );
}

export default App;
