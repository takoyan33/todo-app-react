import { auth } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await auth.createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
      <h11 className="text-1xl font-bold mb-8">ユーザ登録</h11>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          />
        </div>
        <div className="flex items-center mt-3 justify-center">
          <button
            className={
              "bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
            }
          >
            登録
          </button>
        </div>
        <div className="flex items-center mt-3 justify-center">
          <p className={"justify-center text-blue-500 hover:underline mt-4"}>
            <Link to={"/login"}> ユーザ登録済の場合はこちら</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
