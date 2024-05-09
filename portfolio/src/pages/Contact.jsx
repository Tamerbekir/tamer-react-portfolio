// Bringing in the functions that are used within the Contacts
import { submitForm, useForm } from "../components/Form/formHandler";

export default function Contact() {
    // Bringing in input handlers. Name and email are empty strings (nothing preset in them)
    const { inputText, errors, handleChange, handleBlur } = useForm({ name: '', email: '' });

    return (
        <div className="text-center contact">
            <h1>Contact Me</h1>
            <p className="contactText" >Be sure to leave your name and email address below if you wish to be contacted.</p>
            <form noValidate onSubmit={submitForm}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" className="form-control"
                        id="contactInputName"
                        //This is the what the user enters into the value field tied to then name value
                        value={inputText.name}
                        // onChange uses handleChange variable
                        onChange={handleChange}
                        // onChange uses handleBlur variable
                        onBlur={handleBlur} />
                        {/* This is the error message that is displayed if the user does not enter a name. "invalid-feedback" displays the color red while display block helps display the message*/}
                    {errors.name && <div className="invalid-feedback" style={{ display: 'block' }}>
                        {errors.name}
                    </div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control"
                        id="contactInputEmail"
                        value={inputText.email}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    {errors.email && <div className="invalid-feedback" style={{ display: 'block' }}>
                        {errors.email}
                    </div>}
                </div>
                <button type="submit" className="btn btn-primary m-3">Submit</button>
            </form>
        </div>
    );
}
