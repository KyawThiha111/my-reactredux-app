import { Link } from "react-router-dom";

export const Nav = ()=>{
    return (
       <div className="container-lg text-center py-3">
         <nav className="row mx-auto">
           <Link className="col-md-3 text-decoration-none" to="/">Home Page</Link>
           <Link className="col-md-3 text-decoration-none" to="/courses">Courses</Link>
           <Link className="col-md-3 text-decoration-none" to="/about">About Page</Link>
           <button className="col-md-3">Change Color</button>
        </nav>
       </div>
    )
}