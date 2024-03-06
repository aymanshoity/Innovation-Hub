import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="hero min-h-screen" >
            
            <div className="hero-content text-center text-black">
                <div className="max-w-md">
                    <h2 className="text-5xl font-bold">404</h2>
                    <h2 className="text-2xl font-bold">No UI Found..As there was no data Provided</h2>
                    <Link to='/'><button className="btn bg-black text-white">Go back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;