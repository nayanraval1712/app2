import AdminManu from "./AdminManu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
export default function AdminOrder() {
    let DisplayOrders = function (item) {
        return (
            <tr>
                <td>{item.id}</td>
                <td>{item.billdate}</td>
                <td>{item.amount}</td>
                <td>{item.orderstarus}</td>
                <td>{item.fullname} <br /> {item.city} - {item.pincoade}</td>
                <td>
                    <Link to={"/orderdetails/"+item['id']}><button className="btn btn-info mb-2"><i className="fa-solid fa-eye" /> View</button></Link>
                </td>
            </tr>
        )
    }

    let [order, setOrders] = useState([])
    useEffect(() => {
        // api call
        if (order.length === 0) {
            let apiAddress = 'https:www.theeasylearnacademy.com/shop/ws/orders.php'
            axios({
                method: 'get',
                responseType: 'json',
                url: apiAddress
            })
                .then((response) => {
                    console.log(response)
                    let error = response.data[0]['error'];
                    if (error !== 'no')
                        console.log(error);
                    else if (response.data[1]['total'] === 0)
                        console.log('no users found');
                    else {
                        response.data.splice(0, 2);
                        setOrders(response.data);
                    }
                })
                .catch((error) => {
                    console.log(error.code)
                })
        }
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

                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="text-bg-light-gray">No</th>
                                            <th className="text-bg-light-gray">Bill Date </th>
                                            <th className="text-bg-light-gray">Amount</th>
                                            <th className="text-bg-light-gray">Status *</th>
                                            <th className="text-bg-light-gray">Delivery Detail</th>
                                            <th className="text-bg-light-gray">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.map((item) => DisplayOrders(item))}
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