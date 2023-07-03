import { Userlist } from "../const/userlist";
export const Users = () => {
  return (
    <div className="space-y-4">
      {Userlist.map((item) => {
        return (
          <User
            username={item.username}
            email={item.email}
            address={item.address}
          />
        );
      })}
    </div>
  );
};

const User = ({ username, email, address }) => {
  return (
    <div>
      <div>{username}</div>
      <div>{email}</div>
      <div>{address}</div>
    </div>
  );
};
