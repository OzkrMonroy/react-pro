import "../styles/styles.css";
import { ChangeEvent, FormEvent, useState } from "react";

export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    email: "",
    name: "",
    password: "",
    password2: "",
  });

  const { email, name, password, password2 } = registerData;

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [ev.target.name]: ev.target.value,
    });
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(registerData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
        />
        <input
          type="password"
          name="password2"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
