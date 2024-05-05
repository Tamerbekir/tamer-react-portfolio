
//Displaying alert if user tries to submit information at this time (lack of functioning form)
export const submitForm = (e) => {
    e.preventDefault();
    alert('This is a work in progress! Please try again later!')
}

// Handleblur will check if the input is empty, and if it is a class will be added as an error, which will then display the message within the input field
//however, if there is something within the input field the input will remove the error class and display nothing
export const handleBlur = (e) => {
    if (!e.target.value) { 
        //adding class 'error' displays red font
        e.target.classList.add('error'); 
        //adding 'block' as a style makes it visible
        e.target.nextElementSibling.style.display = 'block'; 
    } else {
        e.target.classList.remove('error')
        e.target.nextElementSibling.style.display = 'none'; 
    }
};