
//importing helpers for handling submit button for form and handle blue for input error handling
import { submitForm, handleBlur } from "../../utils/formUtils";

// Exporting Contact function and JSX to be rendered
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
