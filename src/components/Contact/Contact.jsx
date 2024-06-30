import { 
  useState,
  Form,
  Button,
  FloatingLabel,
  emailjs,
  ToastContainer,
  toast,
  Bounce
  } from './contact'

import './contact.css'
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [userData, setUserData] = useState({
    username: '',
    userEmail: '',
    message: ''
  });

  const [error, setError] = useState({
    username: '',
    userEmail: '',
    message: ''
  });

  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleUserChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!userData.username || !userData.userEmail || !userData.message) {
      setError({
        username: !userData.username ? 'Please provide your name' : '',
        userEmail: !userData.userEmail ? 'Please provide your email' : '',
        message: !userData.message ? 'Please provide your message' : ''
      });
      toast.error('Please fill out all fields.', {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    if (!recaptchaValue) {
      toast.error('Please complete the reCAPTCHA.', {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log(result.text);
      toast.success('Contact info sent successfully!', {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setUserData({
        username: '',
        userEmail: '',
        message: ''
      });
      setError({
        username: '',
        userEmail: '',
        message: ''
      });
      setRecaptchaValue(null);
    }, (error) => {
      console.log(error.text);
      toast.error('There was an error sending your message. Please try again later.', {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    });
  };

  return (
    <div>
      <h1 className='contactHeader' id='contact'>Contact</h1>
      <Form onSubmit={sendEmail} className='contactContainer'>
        <br />
        <Form.Text className='messageName'></Form.Text>
        <FloatingLabel label="Your name" >
          <Form.Control
            className='nameInput'
            type="text"
            name="username"
            value={userData.username}
            onChange={handleUserChange}
          />
        </FloatingLabel>
        <p style={{ color: '#F56742' }}>{error.username}</p>
        <Form.Text className='messageEmail'></Form.Text>
        <FloatingLabel label="Your email">
          <Form.Control 
            type="email"
            name="userEmail"
            value={userData.userEmail}
            onChange={handleUserChange}
          />
        </FloatingLabel>
        <p style={{ color: '#F56742' }}>{error.userEmail}</p>
        <Form.Text className='messageText'></Form.Text>
        <FloatingLabel label="Reason for contact">
          <Form.Control
            className='messageInput'
            name="message"
            as="textarea"
            style={{ height: '100px' }}
            value={userData.message}
            onChange={handleUserChange}
          />
        </FloatingLabel>
        <p style={{ color: '#F56742' }}>{error.message}</p>
        <ReCAPTCHA
          className='recaptchaContainer'
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={handleRecaptchaChange}
        />
        <br />
        <Button type="submit" size="sm">
          Contact me
        </Button>
      </Form>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Contact;
