// import React from 'react';
// import './default.css';
// import card1 from './media/card1.jpg'
// import card2 from './media/card2.jpg'
// import card4 from './media/card4.png'
// import card6 from './media/card6.jpg'
// import card13 from './media/card13.jpg'
// import card14 from './media/card14.jpg'
// import card15 from './media/card15.jpg'
// import card17 from './media/card17.jpg'
// import card18 from './media/card18.jpg'
// import card19 from './media/card19.jpg'

// const Default = () => {
//     return ( 
// 	<div className="bg-light">
//         <header>
// 		{/* <!-- <div className="shadow p-2 mb-5 bg-light rounded"> --> */}
// 			<nav className="navbar navbar-expand-lg navbar-light bg-light">
// 				<a className="navbar-brand" href="#">Shopping Webapp</a>
// 				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// 				<span className="navbar-toggler-icon"></span>
// 				</button>
			
// 				<div className="collapse navbar-collapse" id="navbarSupportedContent">
// 					<ul className="navbar-nav mr-auto">
// 						<li className="nav-item active">
// 						<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
// 						</li>
// 						<li className="nav-item">
// 						<a className="nav-link" href="#">Link</a>
// 						</li>
// 						<li className="nav-item">
// 						<a className="nav-link disabled" href="#">Disabled</a>
// 						</li>
// 					</ul>
// 					<form className="form-inline my-2 my-lg-0">
// 						<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
// 						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
// 					</form>
// 				</div>
// 		  	</nav>
// 		{/* <!-- </div> --> */}
// 		</header>
// 		<main>
// 			<section className="jumbotron text-center bg-light ">
// 				<div className="container">
// 				<h1 className="jumbotron-heading">Album example</h1>
// 				<p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
// 				<p>
// 					<a href="#" className="btn btn-primary my-2">Main call to action</a>
// 					<a href="#" className="btn btn-secondary my-2">Secondary action</a>
// 				</p>
// 				</div>
// 			</section>
// 			<div className="d-flex align-items-center mb-5 container-fluid ">
// 				<div className="col-sm-4 mx-auto">
// 					<div className="card shadow">
// 					<img className="card-img-top"  src={card1} alt="Card image cap" />
// 						<div className="card-body">
// 							<h4 className="card-title">Card title</h4>
// 							<p className="card-text">
// 								Some quick example text to build on the card title
// 								and make up the bulk of the card's content.
// 							</p>
// 							<a href="#!" className="btn btn-primary">Go somewhere</a>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="col-sm-4 mx-auto">
// 					<div className="card shadow">
// 						<img className="card-img-top"  src={card2} alt="Card image cap" />
// 						<div className="card-body">
// 							<h4 className="card-title">Card title</h4>
// 							<p className="card-text">
// 								Some quick example text to build on the card title
// 								and make up the bulk of the card's content.
// 							</p>
// 							<a href="#!" className="btn btn-primary">Go somewhere</a>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="col-sm-4 mx-auto ">
// 					<div className="card shadow">
// 						<img className="card-img-top"  src={card4} alt="Card image cap" />
// 						<div className="card-body">
// 							<h4 className="card-title">Card title</h4>
// 							<p className="card-text">
// 								Some quick example text to build on the card title
// 								and make up the bulk of the card's content.
// 							</p>
// 							<a href="#!" className="btn btn-primary">Go somewhere</a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>


// 			<div className="d-flex align-items-center mb-5 container-fluid ">
// 				<div className="col-sm-4 mx-auto">
// 					<div className="card shadow">
// 						<img className="card-img-top"  src={card15} alt="Card image cap" />
// 						<div className="card-body">
// 							<h4 className="card-title">Card title</h4>
// 							<p className="card-text">
// 								Some quick example text to build on the card title
// 								and make up the bulk of the card's content.
// 							</p>
// 							<a href="#!" className="btn btn-primary">Go somewhere</a>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="col-sm-4 mx-auto">
// 					<div className="card shadow">
// 						<img className="card-img-top"  src={card18} alt="Card image cap" />
// 						<div className="card-body">
// 							<h4 className="card-title">Card title</h4>
// 							<p className="card-text">
// 								Some quick example text to build on the card title
// 								and make up the bulk of the card's content.
// 							</p>
// 							<a href="#!" className="btn btn-primary">Go somewhere</a>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="col-sm-4 mx-auto ">
// 					<div className="card shadow">
// 						<img className="card-img-top"  src={card13} alt="Card image cap" />
// 						<div className="card-body">
// 							<h4 className="card-title">Card title</h4>
// 							<p className="card-text">
// 								Some quick example text to build on the card title
// 								and make up the bulk of the card's content.
// 							</p>
// 							<a href="#!" className="btn btn-primary">Go somewhere</a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>


// 			<div className="d-flex align-items-center mb-5 container-fluid ">
// 				<div className="col-sm-4 mx-auto">
// 					<div className="card shadow">
// 						<img className="card-img-top"  src={card17} alt="Card image cap" />
// 						<div className="card-body">
// 							<h4 className="card-title">Card title</h4>
// 							<p className="card-text">
// 								Some quick example text to build on the card title
// 								and make up the bulk of the card's content.
// 							</p>
// 							<a href="#!" className="btn btn-primary">Go somewhere</a>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="col-sm-4 mx-auto">
// 					<div className="card shadow">
// 						<img className="card-img-top"  src={card19} alt="Card image cap" />
// 						<div className="card-body">
// 							<h4 className="card-title">Card title</h4>
// 							<p className="card-text">
// 								Some quick example text to build on the card title
// 								and make up the bulk of the card's content.
// 							</p>
// 							<a href="#!" className="btn btn-primary">Go somewhere</a>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="col-sm-4 mx-auto ">
// 					<div className="card shadow">
// 						<img className="card-img-top"  src={card14} alt="Card image cap" />
// 						<div className="card-body">
// 							<h4 className="card-title">Card title</h4>
// 							<p className="card-text">
// 								Some quick example text to build on the card title
// 								and make up the bulk of the card's content.
// 							</p>
// 							<a href="#!" className="btn btn-primary">Go somewhere</a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</main>
// {/* </div> */}
// 	{/* <!-- Footer --> */}
// 		<footer className="pt-4 my-md-5 pt-md-5 border-top">
// 			<div className="row">
// 			<div className="col-12 col-md">
// 				<img className="mb-2 footer-image" src={card6} alt="" width="24" height="24"/>
// 				<small className="d-block mb-3 text-muted">© 2021</small>
// 			</div>
// 			<div className="col-6 col-md">
// 				<h5>Features</h5>
// 				<ul className="list-unstyled text-small">
// 				<li><a className="text-muted" href="#">Cool stuff</a></li>
// 				<li><a className="text-muted" href="#">Random feature</a></li>
// 				<li><a className="text-muted" href="#">Team feature</a></li>
// 				<li><a className="text-muted" href="#">Stuff for developers</a></li>
// 				<li><a className="text-muted" href="#">Another one</a></li>
// 				<li><a className="text-muted" href="#">Last time</a></li>
// 				</ul>
// 			</div>
// 			<div className="col-6 col-md">
// 				<h5>Resources</h5>
// 				<ul className="list-unstyled text-small">
// 				<li><a className="text-muted" href="#">Resource</a></li>
// 				<li><a className="text-muted" href="#">Resource name</a></li>
// 				<li><a className="text-muted" href="#">Another resource</a></li>
// 				<li><a className="text-muted" href="#">Final resource</a></li>
// 				</ul>
// 			</div>
// 			<div className="col-6 col-md">
// 				<h5>About</h5>
// 				<ul className="list-unstyled text-small">
// 				<li><a className="text-muted" href="#">Team</a></li>
// 				<li><a className="text-muted" href="#">Locations</a></li>
// 				<li><a className="text-muted" href="#">Privacy</a></li>
// 				<li><a className="text-muted" href="#">Terms</a></li>
// 				</ul>
// 			</div>
// 			</div>
// 		</footer>
//     </div> );
// }
 
// export default Default;