interface ExpiredProps {
  message: string
}

const Expired = ({ message }: ExpiredProps) => {
  return (
    <div className="bg-red-200 text-red-700 font-bold rounded-md p-4">
      <p className="text-lg">{message}</p>
    </div>
  );
};

export default Expired;
