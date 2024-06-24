import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import instaLogo from "../assets/Login-SignUp-Images/Logo-Instagram.png";
import fbLogo from "../assets/Login-SignUp-Images/fbLogo.png";
import gplay from "../assets/Login-SignUp-Images/google-play.png";
import microsoft from "../assets/Login-SignUp-Images/microsoft.png";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { RotatingLines } from "react-loader-spinner";
import { ref, onValue } from "firebase/database"; // Import Firebase Realtime Database functions
import { db } from "../firebase.config";

const Login = () => {
  const auth = getAuth();

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [loginData, setLoginData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [isLoginValid, setLoginValid] = useState(false);
  const [isPwdVisible, setPwdVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [carouselImages, setCarouselImages] = useState([]); 

  const navigate = useNavigate();

  useEffect(() => {

    const imagesRef = ref(db, "LoginImages");

    onValue(imagesRef, (snapshot) => {
      const imageData = snapshot.val();
      if (imageData) {
        const images = Object.values(imageData);
        setCarouselImages(images);
      }
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages]);

  useEffect(() => {
    const validateInput = () => {
      if (
        loginData.emailOrPhone.trim() !== "" &&
        loginData.password.trim() !== "" &&
        loginData.password.length >= 6
      ) {
        setLoginValid(true);
      } else {
        setLoginValid(false);
      }
    };

    validateInput();
  }, [loginData]);

  const togglePasswordVisibility = () => {
    setPwdVisible(!isPwdVisible);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, loginData.emailOrPhone, loginData.password)
      .then((userCredential) => {
        // Signed in
        // eslint-disable-next-line no-unused-vars
        const user = userCredential.user;
        setTimeout(() => {
          navigate("/home");
        }, 3000);
        setIsLoading(false);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setIsLoading(false);
        if (errorCode.includes("auth/wrong-password")) {
          setError(
            "Sorry, your password was incorrect. Please double-check your password."
          );
        } else if (errorCode.includes("auth/user-not-found")) {
          setError(
            "No user found with the given username or email or phone number."
          );
        } else {
          setError("Something went wrong. Please try again later");
        }
      });
  };

  return (
    <>
      <div className="w-full min-h-screen flex justify-center p-6 overflow-hidden">
        <div className="w-2/5 max-h-full relative sm:hidden md:hidden lg:hidden xl:block hidden">
          <img
            src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png"
            alt="img-0"
          />
          <div className="absolute top-[4%] left-[32%] w-[250px] h-[542px] overflow-hidden">
            <AnimatePresence>
              {carouselImages.map(
                (imageUrl, index) =>
                  index === currentImgIndex && (
                    <motion.img
                      key={index}
                      src={imageUrl}
                      alt={`Carousel Image ${index}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="w-full h-full object-cover"
                    />
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="xl:w-[28%] sm:w-[50%] md:w-[50%] w-full h-auto my-4 flex flex-col gap-4">
          <div className="w-full border border-gray-300  h-auto">
            <form onSubmit={handleLogin}>
              <div className="w-full flex flex-col items-center justify-center gap-2">
                <img className="w-1/2 mt-4" src={instaLogo} alt="insta-logo" />
                <div className="w-full flex flex-col items-center gap-3 mb-2">
                  <input
                    className="w-4/5 border-gray-300 border rounded-sm focus-within:outline-slate-300 text-xs p-2.5"
                    type="text"
                    placeholder="Phone number, username, or email"
                    value={loginData.emailOrPhone}
                    onChange={(e) =>
                      setLoginData((prevData) => ({
                        ...prevData,
                        emailOrPhone: e.target.value,
                      }))
                    }
                  />
                  <div className="w-4/5 relative">
                    <input
                      className="w-full border-gray-300 border rounded-sm focus-within:outline-slate-300 text-xs p-2.5"
                      type={isPwdVisible ? "text" : "password"}
                      placeholder="Password"
                      value={loginData.password}
                      onChange={(e) =>
                        setLoginData((prevData) => ({
                          ...prevData,
                          password: e.target.value,
                        }))
                      }
                    />
                    {loginData.password.length > 0 && (
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 px-2 flex items-center font-semibold text-sm hover:text-black/30"
                        onClick={togglePasswordVisibility}
                      >
                        {isPwdVisible ? "Hide" : "Show"}
                      </button>
                    )}
                  </div>
                  <button
                    className={`w-4/5 p-1 ${
                      isLoginValid ? "bg-blue-500" : "bg-blue-300"
                    } border rounded-lg text-white font-semibold mb-2`}
                    disabled={!isLoginValid || isLoading}
                  >
                    {!isLoading ? (
                      "Log in"
                    ) : (
                      <div className="flex items-center justify-center">
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
                  </button>
                </div>
                <div className="w-full flex items-center justify-center mb-6">
                  <span className="w-[32%] border border-gray-300"></span>
                  <p className="mx-4 text-gray-500 font-semibold text-sm">OR</p>
                  <span className="w-[32%] border border-gray-300"></span>
                </div>
                <div className="w-full flex items-center justify-center">
                  <img
                    className="w-8 hover:cursor-pointer"
                    src={fbLogo}
                    alt="fb=logo"
                  />
                  <h3 className="text-blue-900 font-semibold hover:cursor-pointer">
                    Log in with Facebook
                  </h3>
                </div>
                <div className="w-full text-red-500 text-sm text-center px-6">
                  {error && <p>{error}</p>}
                </div>
                <div className="text-xs my-2">
                  <p className="hover:cursor-pointer">Forgot Password?</p>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full border border-gray-300 h-[10vh] p-2 flex justify-center items-center text-sm">
            <h1>
              Don&apos;t have an account?{" "}
              <Link to="/sign-up">
                <span className="text-blue-500 font-semibold hover:cursor-pointer">
                  Sign up
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
      </div>
    </>
  );
};

export default Login;
//Sorry, your password was incorrect. Please double-check your password.
