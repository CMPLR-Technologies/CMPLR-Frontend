import b1 from "../../assets/backgrounds/b1.jpg";
import b2 from "../../assets/backgrounds/b2.jpg";
import b3 from "../../assets/backgrounds/b3.jpg";
import b4 from "../../assets/backgrounds/b4.jpg";

const getRandomImage = () => {
  const k = Math.floor(Math.random() * 4);
  const bs = [b1, b2, b3, b4];
  return bs[k];
};

const handleLogin = (Email, Password, setError) => {
  if (Email.length == 0) setError("Please Enter Your Email");
  else if (Password.length == 0) setError("Please Enter Your Password");
  else
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Email, Password }),
    }).then((res) => {
      if (!res.ok) {
        setError("Coudn't Log in");
      }
    });
};

export { getRandomImage, handleLogin };
