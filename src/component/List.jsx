const Card = ({ Content }) => {
  return (
    <div className="bg-indigo-100 text-indigo-500 p-2"> Card {content} </div>
  );
};

export const List = () => {
  const data = ["indra", "afifah", "ahmad"];

  return (
    <>
      {data.map((item) => {
        return <Card content={item} />;
      })}
    </>
  );
};
