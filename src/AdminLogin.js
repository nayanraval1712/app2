import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminLogin() {
    // creat a state veriable for set input from user 
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();

    // creat a function for submit
    let login = function (e) {
        e.preventDefault()
        console.log(email, password)
    }

    return (
        <div className="">
            <div className="container mt-5 bg-gradient-primary">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user" onSubmit={login} >
                                                <div className="form-group">
                                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                                                </div>
                                                <input type="submit" value='Login' className="btn btn-primary btn-user btn-block" />
                                                <hr />
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <Link className="small" to="/forgotpassword">Forgot Password?</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}