import { 
  useState,
  Form,
  Button,
  FloatingLabel,
  emailjs,
  ToastContainer,
  Bounce,
  toast
  } from './contact'

import './contact.css'
import 'react-toastify/dist/ReactToastify.css';

// setting up state for userData they type into form field/input value
// strings are empty because a string should only populate for errors, in this case
const Contact = () => {
  const [userData, setUserData] = useState({
    username: '',
    userEmail: '',
    message: ''
  });

  //setting up state for error message user can receive
  // string is empty unless user encounters an error
  const [error, setError] = useState({
    username: '',
    userEmail: '',
    message: ''
  });

  // setting up onChange and taking in userData for when user enters info into form fields.
   //for every change in this form field, this function will be called
  const handleUserChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    //if the user tries to send contact info and left field empty, user will get error for field that has error
    // and error will be placed within the useState string if user does not meet criteria
    if (!userData.username || !userData.userEmail || !userData.message) {
      setError({
        username: !userData.username ? 'Please provide your name' : '',
        userEmail: !userData.userEmail ? 'Please provide your email' : '',
        message: !userData.message ? 'Please provide your message' : ''
      });
      toast.error('Please fill out all fields.', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log(result.text);
      //bringing in Toastify package for success
      toast.success('Contact info sent successfully!', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
      //if the users info is sent successfully, clear their information as well as any error message they may have encountered prior
      setUserData({
        username: '',
        userEmail: '',
        message: ''
      });
      setError({
        username: '',
        userEmail: '',
        message: ''
      })
    }, (error) => {
      console.log(error.text);
      //bringing in Toastify package for error
      toast.error('There was an error sending your message. Please try again later', {
        position: "top-left",
        autoClose: 5000,
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
        <Form.Text className='messageText'>Reason for contact</Form.Text>
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
