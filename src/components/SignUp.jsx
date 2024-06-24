import instaLogo from "../assets/Login-SignUp-Images/Logo-Instagram.png";
import fbLogo from "../assets/Login-SignUp-Images/fbLogo2.png";
import { Link, useNavigate } from "react-router-dom";
import gplay from "../assets/Login-SignUp-Images/google-play.png";
import microsoft from "../assets/Login-SignUp-Images/microsoft.png";
import { useState, useEffect } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { RotatingLines } from "react-loader-spinner";

const SignUp = () => {
  const auth = getAuth();

  const [user, setUser] = useState({
    mobileOrEmail: "",
    fullName: "",
    username: "",
    password: "",
  });

  const [isValidData, setValidData] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const isEmailValid = /\S+@\S+\.\S+/.test(user.mobileOrEmail);
  const isPhoneValid = /^\d{10}$/.test(user.mobileOrEmail);

  useEffect(() => {
    const validateData = () => {
      if (
        (isEmailValid || isPhoneValid) &&
        user.mobileOrEmail.trim() !== "" &&
        user.fullName.trim() !== "" &&
        user.username.trim() !== "" &&
        user.password.trim() !== "" &&
        user.password.length >= 6
      ) {
        setValidData(true);
      } else {
        setValidData(false);
      }
    };
    validateData();
  }, [isEmailValid, isPhoneValid, user]);

  const handleSignUp = (event) => {
    event.preventDefault();
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, user.mobileOrEmail, user.password)
      .then((userCredential) => {
        // eslint-disable-next-line no-unused-vars
        const user = userCredential.user;
        setTimeout(() => navigate("/"), 3000);
        setIsLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorCode.includes("auth/email-already-in-use")) {
          setIsLoading(false);
          setError("Another account is using the same email.");
        } else {
          setError("Something went wrong. Please try again later");
        }
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="xl:w-[28%] lg:w-[40%] sm:w-[50%] md:w-[50%] w-[90%] border border-gray-300 h-auto mt-4">
        <form onSubmit={handleSignUp}>
          <div className="w-full flex flex-col justify-center items-center">
            <img
              className="w-1/2 mt-4 h-[90px]"
              src={instaLogo}
              alt="insta-logo"
            />
            <p className="w-3/4 text-center text-gray-500 font-semibold mb-4">
              Sign up to see photos and videos from your friends.
            </p>
            <button
              className="w-3/4 p-1 bg-blue-500 border rounded-lg text-white font-semibold flex justify-center items-center text-sm hover:bg-blue-600 hover:cursor-pointer mb-5"
              disabled
            >
              <span>
                <img src={fbLogo} alt="fb-logo" className="w-8" />
              </span>{" "}
              Log in with Facebook
            </button>
            <div className="w-full flex items-center justify-center mb-6">
              <span className="w-[30%] border border-gray-200"></span>
              <p className="mx-4 text-gray-500 font-semibold text-sm">OR</p>
              <span className="w-[30%] border border-gray-200"></span>
            </div>
            <div className="w-3/4 text-xs flex flex-col gap-2">
              <div className="relative">
                <input
                  className="w-full rounded-sm p-2.5 border border-gray-300 focus-within:outline-slate-300"
                  type="text"
                  placeholder="Mobile Number or Email"
                  value={user.mobileOrEmail}
                  onChange={(e) =>
                    setUser((prevState) => ({
                      ...prevState,
                      mobileOrEmail: e.target.value,
                    }))
                  }
                />
                {error ||
                  (user.mobileOrEmail.length > 0 &&
                    !(isEmailValid || isPhoneValid) && (
                      <span className="absolute inset-y-0 right-0 px-2 flex items-center text-red-600">
                        <HighlightOffIcon />
                      </span>
                    ))}
                {user.mobileOrEmail.length > 0 &&
                  (isEmailValid || isPhoneValid) &&
                  !error && (
                    <span className="absolute inset-y-0 right-0 px-2 flex items-center text-gray-400">
                      <CheckCircleOutlineIcon />
                    </span>
                  )}
              </div>
              <div className="relative">
                <input
                  className="w-full rounded-sm p-2.5 border border-gray-300 focus-within:outline-slate-300"
                  type="text"
                  placeholder="Full Name"
                  value={user.fullName}
                  onChange={(e) =>
                    setUser((prevState) => ({
                      ...prevState,
                      fullName: e.target.value,
                    }))
                  }
                />
                {user.fullName.length > 0 && (
                  <span className="absolute inset-y-0 right-0 px-2 flex items-center text-gray-400">
                    <CheckCircleOutlineIcon />
                  </span>
                )}
              </div>
              <div className="relative">
                <input
                  className="w-full rounded-sm p-2.5 border border-gray-300 focus-within:outline-slate-300"
                  type="text"
                  placeholder="Username"
                  value={user.username}
                  onChange={(e) =>
                    setUser((prevState) => ({
                      ...prevState,
                      username: e.target.value,
                    }))
                  }
                />
                {user.username.length > 0 && (
                  <span className="absolute inset-y-0 right-0 px-2 flex items-center text-gray-400">
                    <CheckCircleOutlineIcon />
                  </span>
                )}
              </div>
              <div className="relative">
                <input
                  className="w-full rounded-sm p-2.5 border border-gray-300 focus-within:outline-slate-300"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) =>
                    setUser((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }))
                  }
                />
                {user.password.length > 0 && (
                  <>
                    {user.password.length >= 6 && (
                      <span className="absolute inset-y-0 right-10 px-2 flex items-center text-gray-400">
                        <CheckCircleOutlineIcon />
                      </span>
                    )}
                    {user.password.length < 6 && (
                      <span className="absolute inset-y-0 right-10 px-2 flex items-center text-red-600">
                        <HighlightOffIcon />
                      </span>
                    )}
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 px-2 flex items-center font-semibold text-sm hover:text-black/30"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="w-full text-xs text-gray-500 flex flex-col items-center justify-center mt-3">
              <p>People who use our service may have uploaded</p>{" "}
              <p>
                your contact information to Instagram.{" "}
                <span className="text-blue-900 hover:cursor-pointer">
                  Learn More
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center w-full text-xs text-gray-500 my-3">
              <p>
                By signing up, you agree to our{" "}
                <span className="text-blue-900 hover:cursor-pointer">
                  Terms
                </span>{" "}
                ,{" "}
                <span className="text-blue-900 hover:cursor-pointer">
                  Privacy
                </span>
              </p>
              <p>
                <span className="text-blue-900 hover:cursor-pointer">
                  {" "}
                  Policy
                </span>{" "}
                and{" "}
                <span className="text-blue-900 hover:cursor-pointer">
                  Cookies Policy
                </span>
              </p>
            </div>
            {!isLoading ? (
              <button
                className={`w-3/4 p-1 ${
                  isValidData ? "bg-blue-500" : "bg-blue-300"
                } border rounded-lg text-white font-semibold mb-2`}
                disabled={!isValidData}
              >
                Sign up
              </button>
            ) : (
              <div className="flex items-center justify-center mb-4">
                <RotatingLines
                  visible={true}
                  height="20"
                  width="20"
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            )}

            {error && (
              <p className="py-3 mb-10 text-red-500 text-sm">{error}</p>
            )}
          </div>
        </form>
      </div>
      <div className="xl:w-[28%] lg:w-[40%] sm:w-[50%] md:w-[50%] w-[90%] border border-gray-300 h-[10vh] p-2 flex justify-center items-center text-sm my-3">
        <h1>
          Have an account?{" "}
          <Link to="/">
            <span className="text-blue-500 font-semibold hover:cursor-pointer">
              Log in
            </span>
          </Link>
        </h1>
      </div>
      <div className="w-full flex flex-col items-center gap-3">
        <p className="text-sm">Get the app.</p>
        <div className="w-3/4 flex items-center justify-center gap-3">
          <Link
            target="_blank"
            to="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DF7C2BF92-F335-41CE-800B-AA9B5AD4026F%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge"
          >
            <img
              className="w-36 hover:cursor-pointer"
              src={gplay}
              alt="google-play"
            />
          </Link>
          <Link to="ms-windows-store://home">
            <img
              className="w-32 hover:cursor-pointer"
              src={microsoft}
              alt="microsoft"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
