const Home = ({ setCurrentPage }) => {
  return (
    <div className="page">
      <div className="content">
        <h1>Welcome to AuthApp!</h1>
        <div className="create-or-login-button-box">
          <button type="button" className="login-button" onClick={()=>setCurrentPage("login")}>
            Login
          </button>
          <p>-OR-</p>
          <button type="button" className="create-button" onClick={()=>setCurrentPage("createAccount")}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
