import { dataBlog } from "../const/userlist";

export const Bloglist = () => {
  return (
    <div className="space-y-4">
      {dataBlog.map((item) => {
        return (
          <div key={item.id}>
            <h3 className="text-slate-700 text-m">{item.title}</h3>
            <p className="text-sm text-slate-300">{item.views}</p>
          </div>
        );
      })}
    </div>
  );
};
