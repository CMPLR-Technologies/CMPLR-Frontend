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

const handleLogin = (Email, Password, setError, user, setUser) => {
    if (Email.length === 0) {
        setError('Please Enter Your Email');
    } else if (Password.length === 0) {
        setError('Please Enter Your Password');
    } else {
        const { done, error, userData } = logUser(Email, Password);
        if (done === true) {
            setUser(userData);
        } else {
            setError(error);
        }
    }
};

export { getRandomImage, handleLogin };
