import { useEffect, useState } from "react";

const URL = "https://api.tablebackend.com/v1/rows/Mp8eelV0iKiC";

export const ToolList = () => {
  const [toolsData, setToolsData] = useState([]);

  const getToolsData = async () => {
    const response = await fetch(URL);
    const { data } = await response.json();
    setToolsData(data);
  };

  useEffect(() => {
    getToolsData();
  }, []);

  return (
    <div>
      <h1>ToolList</h1>
      <div className="space-y-4">
        {toolsData.map(({ _id, name, image, pricing, desc }) => {
          return (
            <div
              key={_id}
              className="flex gap-4 bg-slate-800 border-2 p-4 rounded-xl"
            >
              <div className="w-[80px]">
                <img src={image} className="w-24 rounded 2xl" />
              </div>
              <div className="w-[calc(100%-80px)]">
                <div className="flex justify-between">
                  <h3>{name}</h3>
                  <p>{pricing}</p>
                </div>
                <div>{desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
