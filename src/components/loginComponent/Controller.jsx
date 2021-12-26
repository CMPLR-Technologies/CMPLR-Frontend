import b1 from '../../assets/backgrounds/b1.jpg';
import b2 from '../../assets/backgrounds/b2.jpg';
import b3 from '../../assets/backgrounds/b3.jpg';
import b4 from '../../assets/backgrounds/b4.jpg';
import { logUser } from './Service';

const getRandomImage = () => {
    const k = Math.floor(Math.random() * 4);
    const bs = [b1, b2, b3, b4];
    return bs[k];
};

const inputCheck = (email, password) => {
    if (email.length === 0) return 'please enter your email';
    if (password.length === 0) return 'please enter your password';
    return null;
};

const handleLogin = (
    email,
    password,
    setError,
    setUser,
    setIsPending,
    navigate
) => {
    const err = inputCheck(email, password);
    setIsPending(true);
    if (err) {
        setError([err]);
        setIsPending(false);
    } else logUser(email, password, setUser, setError, setIsPending, navigate);
};

export { getRandomImage, handleLogin };
