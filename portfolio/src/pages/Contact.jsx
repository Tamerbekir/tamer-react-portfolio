
//Displaying alert if user tries to submit information at this time (lack of functioning form)
const submitForm = (e) => {
    e.preventDefault();
    alert('This is a work in progress! Please try again later!')
}

// Handleblur will check if the input is empty, and if it is a class will be added as an error, which will then display the message within the input field
//however, if there is something within the input field the input will remove the error class and display nothing
const handleBlur = (e) => {
    if (!e.target.value) { 
        e.target.classList.add('error'); 
        e.target.nextElementSibling.style.display = 'block'; 
    } else {
        e.target.classList.remove('error')
        e.target.nextElementSibling.style.display = 'none'; 
    }
};


// If user does not enter information and hovers away from the input fields they will get a message within the input field
export default function Contact() {
    return (
        <div className="text-center contact">
            <h1>Contact Me</h1>
            <p>This is the Contact me section.</p>
            {/* submit form will display an alert when clicked */}
            <form noValidate onSubmit={ submitForm }>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    {/* on blur takes effect when user leaves the email section with any input  */}
                    <input type="text" className="form-control" id="contactInputName" required onBlur={ handleBlur } />
                    {/* display a style of nothing if user does not yet go into the input field to type someone ein */}
                    <div className="invalid-feedback" style={{ display: 'none' }}>
                        Please enter a name.
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    {/* on blur takes effect when user leaves the email section with any input  */}
                    <input type="email" className="form-control" id="contactInputEmail" required onBlur={ handleBlur } />
                    {/* display a style of nothing if user does not yet go into the input field to type someone ein */}
                    <div className="invalid-feedback" style={{ display: 'none' }}>
                    Please enter an email.
                    </div>
                </div>
                <button type="submit" className="btn btn-primary m-3">Submit</button>
            </form>
        </div>
    );
}
