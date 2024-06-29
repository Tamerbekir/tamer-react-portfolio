// import { useState } from 'react';

//Displaying alert if user tries to submit information at this time (lack of functioning form)
export const submitForm = (e) => {
    e.preventDefault();
    if (submitForm) {
        alert('This is a work in progress! Please try again later!');
    }
}



// User gets a prompt if they go to view an application that is not deployable
export const projectDefault = (e) => {
    e.preventDefault();
    alert('This project showcases back-end development only and is not deployable. Please view the GitHub repository for more information.')
}





// // Form validation using email regex and contact name and custom hook for form state management and validation.
// export const useForm = (inputValues) => {
//     // Using inputText and errors for useState. 
//     const [inputText, setInputText] = useState(inputValues);
//     const [errors, setErrors] = useState({});

//     // Validates the form input fields and updates the error state 
//     const validate = (userInfo, value) => {
//         // Variable for errors using spread method to bring in all errors
//         let userError = { ...errors };

//         // if there is no value (input field left empty), display an error for the user within for the name input field and display message.
//         if (!value) {
//             // is there is nothing entered by the user, display Required
//             userError[userInfo] = `Required`;
//             // Testing the value of the users value they typed in the input field. If the user enters an email that is not valid/does not match regex, display an error message.
//         } else if (userInfo === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
//             // then display message informing user email is not valid
//             userError[userInfo] = 'Please enter a valid email';
//             // If the user enters a name and email that are good, delete any error message on the screen
//         } else {
//             delete userError[userInfo];
//         }

//         // Display/set the error from error variable
//         setErrors(userError);
//     };

//     // This variable is for the 'onChange' method in the Contacts page. It looks for the text by the user within the name and email field 
//     // The name is tied to both the email and the name inputs. Then it targets the value (whatever the use types in)
//     //Then it will validate it using the validate method

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setInputText(prev => ({
//             ...prev,
//             [name]: value
//         }));
//         validate(name, value);
//     };

//     // This Used for creating the 'onBlur' method in the Contacts page.
//     // This variable is used to validate the users input in the name and value field. When the user clicks outside of the input , the validation will take place. This is the blur effect (or losing focus)
//     const handleBlur = (event) => {
//         const { name, value } = event.target;
//         validate(name, value);
//     };

//     // This is the return statement. It will return the handleChange, handleBlur, inputText, and errors which are then exported to the Contacts page.
//     return {
//         handleChange,
//         handleBlur,
//         inputText,
//         errors
//     };
// };
