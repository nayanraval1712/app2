import { useState,useEffect } from "react"
import axios from "axios"
import AdminMenu from "./AdminManu"
export default function AdminHome() {

    // creat a state veriable  for .... id show
    let [home, setHome] = useState('')

    // for api call and featch the id 
    useEffect(() => {

        let apiAddress = 'http://www.theeasylearnacademy.com/shop/ws/summery.php' 
        console.log(apiAddress);       
    })
    return (<div id="wrapper">
        <AdminMenu />
        <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm" />
                                </button>
                            </div>
                        </div>
                    </form>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-3">Sales Summary</h2>
                        </div>
                        <div className="col-lg-3">
                            <div className="card overflow-hidden">
                                <div className="card-body p-4">
                                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Today Sales</h4>
                                    <div className="col-12">
                                        <h5 className="fw-semibold mb-3"><span className="badge bg-primary p-2">100</span> Orders</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card overflow-hidden">
                                <div className="card-body p-4">
                                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Weekly Sales</h4>
                                    <div className="col-12">
                                        <h5 className="fw-semibold mb-3"><span className="badge bg-primary p-2">100</span> Orders</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card overflow-hidden">
                                <div className="card-body p-4">
                                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Monthly Sales</h4>
                                    <div className="col-12">
                                        <h5 className="fw-semibold mb-3"><span className="badge bg-primary p-2">100</span> Orders</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card overflow-hidden">
                                <div className="card-body p-4">
                                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Yearly Sales</h4>
                                    <div className="col-12">
                                        <h5 className="fw-semibold mb-3"><span className="badge bg-primary p-2">100</span> Orders</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <h2 className="mb-3">Shop Summary</h2>
                        </div>
                        <div className="col-lg-4">
                            <div className="card overflow-hidden">
                                <div className="card-body p-4">
                                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Total Users</h4>
                                    <div className="col-12">
                                        <h5 className="fw-semibold mb-3"><span className="badge bg-primary p-2">100</span> Users</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card overflow-hidden">
                                <div className="card-body p-4">
                                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Total Product</h4>
                                    <div className="col-12">
                                        <h5 className="fw-semibold mb-3"><span className="badge bg-primary p-2">100</span> Products</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card overflow-hidden">
                                <div className="card-body p-4">
                                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Total Categories</h4>
                                    <div className="col-12">
                                        <h5 className="fw-semibold mb-3"><span className="badge bg-primary p-2">100</span> Category</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}