import projectOne from '../assets/placeholder.jpeg';
import techBlogImg from '../assets/techBlog.jpeg';

export default function Portfolio() {
    return (
        <div className="container text-center portfolio">
            <h1 className='portfolioHeader'>Portfolio</h1>
            <p>This is the portfolio section.</p>
            <div className="row"> {/* Start of first row */}
                <div className="col-md-4 mb-4"> {/* Each card takes up 4 columns */}
                    <a href="https://www.example.com">
                        <div className="card">
                            <img src={techBlogImg} className="card-img-top img-portfolio" alt="tech-blog-photo" />
                            <div className="card-body">
                                <h5 className="card-title">Tech Blog</h5>
                                <p className="card-text">A website designed with a database to take in new and existing users that can create blogs and discuss the latest tech!</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={projectOne} className="card-img-top" alt="Placeholder"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={projectOne} className="card-img-top" alt="Placeholder"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div> {/* End of first row */}
            <div className="row"> {/* Start of second row */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={projectOne} className="card-img-top" alt="Placeholder"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={projectOne} className="card-img-top" alt="Placeholder"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={projectOne} className="card-img-top" alt="Placeholder"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div> {/* End of second row */}
        </div>
    );
}
