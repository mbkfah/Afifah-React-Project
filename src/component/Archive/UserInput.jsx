import { useState, useEffect } from "react";

export const UserInput = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

  useEffect(() => {
    // console.log("ini side effect ketika username berubah");
    if (username === "Afifah" && password === "1234") {
      setIsAdmin(true);
      setIsPasswordInvalid(false);
    } else if (
      username === "Afifah" &&
      password !== "1234" &&
      password !== ""
    ) {
      setIsPasswordInvalid(true);
    }
  }, [username, password]);

  return (
    <div>
      <label> Username </label>
      <input onChange={(event) => setUsername(event.target.value)} />
      <label> Password </label>
      <input onChange={(event) => setPassword(event.target.value)} />
      {isAdmin === true && <div>Anda adalah Admin</div>}
      {isPasswordInvalid === true && <div> Password Anda Salah </div>}
    </div>
  );
};
