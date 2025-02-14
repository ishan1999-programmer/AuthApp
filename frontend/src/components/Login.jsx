import { useForm } from "react-hook-form";

const Login = ({ setCurrentPage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onValidSubmission(data) {
    console.log(data);
  }
  return (
    <div className="page">
      <form className="form" onSubmit={handleSubmit(onValidSubmission)}>
        <h1>Login</h1>
        <div className="email-box">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "Oops! Looks like you forgot to enter your email.",
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="password-box">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            {...register("password", {
              required: "Oops! Looks like you forgot to enter your password.",
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <p
          className="form-navigator"
          onClick={() => setCurrentPage("createAccount")}
        >
          Don't have an account? Create one now!
        </p>
      </form>
    </div>
  );
};

export default Login;
