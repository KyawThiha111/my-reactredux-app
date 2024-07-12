import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login, logout } from "../../features/user";
export const Main = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const newUser = useSelector((state: any) => state.user.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Login Page</h2>
      {/* Form */}
      {!isLogin && (
        <div className="row  text-white d-flex justify-content-center align-items-center">
          <form className="col-4 bg-success">
            <div className="mb-3 display-flex">
              <input
                type="text"
                className="form-control mt-2"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Your Name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value)
                }
              />
              <input
                type="text"
                className="form-control my-3"
                id="age"
                aria-describedby="emailHelp"
                placeholder="Your Age"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAge(Number(e.target.value))
                }
              />

              <input
                type="password"
                className="form-control"
                id="password"
                aria-describedby="emailHelp"
                placeholder="Password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </div>

            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setIsLogin(!isLogin);
                dispatch(
                  login({ name: username, age: age, password: password })
                );
              }}
              className="btn btn-outline-warning"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {/* User Display */}
      <div>
        <div>name:{newUser.name} </div>
        <div>age:{newUser.age} </div>
        <div>password:{newUser.password} </div>
        {isLogin && (
          <button onClick={() => {dispatch(logout()); setIsLogin(!isLogin)}} className="btn btn-danger">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};
