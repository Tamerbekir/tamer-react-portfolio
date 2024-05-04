

export default function Contact() {
    return (
        <div className="text-center contact">
            <h1>Contact Me</h1>
            <p>This is the Contact me section.</p>
            <div>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="email" className="form-control" id="contactInputName"/>
                    <div id="contactMessage" className="form-text">We will never share your information with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    {/* made changes to bootstrap boiler plate elements such as adjusting Form to div and closing input tag */}
                    <input className="form-control" id="contactInputEmail" />
                </div>
                <button type="submit" className="btn btn-primary m-3">Submit</button>
            </div>
        </div>
    );
}
