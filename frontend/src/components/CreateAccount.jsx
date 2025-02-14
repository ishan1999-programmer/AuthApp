import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
const CreateAccount = ({ setCurrentPage }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  function onValidSubmission(data) {
    navigate("/dashboard");
  }

  return (
    <div className="page">
      <form className="form" onSubmit={handleSubmit(onValidSubmission)}>
        <h1>Create Account</h1>
        <div className="name-box">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Oops! Looks like you forgot to enter your name.",
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="email-box">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "Oops! Looks like you forgot to enter your email.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:
                  "Hmm... that doesn’t look like a valid email. Could you double-check it?",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="password-box">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            {...register("password", {
              required: "Oops! Looks like you forgot to create your password.",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be 8+ chars with uppercase, lowercase, number & special character",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="confirm-password-box">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="text"
            {...register("confirmPassword", {
              required: "Oops! Looks like you forgot to confirm your password.",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit" className="create-button">
          Create Account
        </button>
        <p
          className="form-navigator"
          onClick={() => setCurrentPage("login")}
        >
          Already have an account? Log in here!
        </p>
      </form>
    </div>
  );
};

export default CreateAccount;
