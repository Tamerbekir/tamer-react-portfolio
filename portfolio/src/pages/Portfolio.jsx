
// Portfolio page, exporting function to main app for rendering
// Will display multiple projects
// Using Bootstrap elements
export default function Portfolio() {
    return (
        <div className="text-center portfolio">
            <h1>Portfolio</h1>
            <p>This is the portfolio section.</p>
            <div className="card-group">
                <div className="card m-2">
                    <img src="../assets/placeholder.jpeg" className="card-img-top" alt="..."></img>
                    <div className="card-body project-one">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card m-2">
                    <img src="..." className="card-img-top" alt="..."></img>
                    <div className="card-body project-two">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card m-2">
                    <img src="..." className="card-img-top" alt="..."></img>
                    <div className="card-body project-three">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div className="card-group">
                <div className="card m-2">
                    <img src="..." className="card-img-top" alt="..."></img>
                    <div className="card-body project-four">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card m-2">
                    <img src="..." className="card-img-top" alt="..."></img>
                    <div className="card-body project-five">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card m-2">
                    <img src="..." className="card-img-top" alt="..."></img>
                    <div className="card-body project-six">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

