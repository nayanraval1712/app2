import AdminManu from "./AdminManu";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
export default function AdminOrderDetails() {
    // varible banavo j quary string pass kare 
    let { orderid } = useParams();
    //create state object
    let [order, setOrder] = useState({});

    useEffect(() => {

        let apiAddress = 'https:www.theeasylearnacademy.com/shop/ws/orders.php?id=' + orderid;
        console.log(apiAddress);
        axios({
            method: "get",
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if (error != 'no') {
                console.log(error);
            }
            else if (response.data[1]['total'] === 0) {
                console.log('no order details found');
            }
            else {
                setOrder(response.data[2]);
            }
        })
    })

    return (
        <div id="wrapper">
            <AdminManu />
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
                        <div className="card">
                            <div className="card-header d-flex justify-content-between">
                                <h3>Order Details</h3>
                                <div>
                                    <Link to="/order" className="btn btn-primary">Back</Link> &nbsp;
                                    <button className="btn btn-primary" type="button" onClick={() => window.print()}>
                                        Print Invoice
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th>Bill No.</th>
                                            <td>{order['id']}</td>
                                            <th>Custamer Id</th>
                                            <td>{order['id']}</td>
                                        </tr>
                                        <tr>
                                            <th>Date</th>
                                            <td>{order['billdate']}</td>
                                            <th>Name</th>
                                            <td>{order['fullname']}</td>
                                        </tr>
                                        <tr>
                                            <th>Amount</th>
                                            <td>${order['amount']}</td>
                                            <th>Adress</th>
                                            <td>{order['address1']} {order['address2']}</td>
                                        </tr>
                                        <tr>
                                            <th>Payment Status</th>
                                            <td>{order['id']}</td>
                                            <th>City</th>
                                            <td>{order['city']}</td>
                                        </tr>
                                        <tr>
                                            <th>Order Status</th>
                                            <td>
                                                Dispatch Status &nbsp;
                                                <select name="order-status" className="form-select">
                                                    <option value>order Conform</option>
                                                    <option value>Dispatched</option>
                                                    <option value>Delivered</option>
                                                    <option value>Return</option>
                                                </select>
                                            </td>
                                            <th>Pincode</th>
                                            <td>{order['pincode']}</td>
                                        </tr>
                                        <tr>
                                            <th>Remark</th>
                                            <td>None</td>
                                            <th>Mobile</th>
                                            <td>9988776655</td>
                                        </tr>
                                    </tbody></table>
                                <table className="table table-bordered table-striped table-sm mt-3">
                                    <thead>
                                        <tr>
                                            <th>Product ID</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>001</td>
                                            <td>Product A</td>
                                            <td>₹50.00</td>
                                            <td>2</td>
                                            <td>₹100.00</td>
                                        </tr>
                                        <tr>
                                            <td>002</td>
                                            <td>Product B</td>
                                            <td>₹75.00</td>
                                            <td>3</td>
                                            <td>₹225.00</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={4} />
                                            <th>₹325.00</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

