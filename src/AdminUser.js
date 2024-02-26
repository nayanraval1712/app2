import AdminManu from "./AdminManu";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function AdminUser() {

    let DisplayUser = function (item) {
        //object destructuring
        let { id, email, mobile } = item;
        return (<tr>
            <td>{id}</td>
            <td>{email}</td>
            <td>{mobile}</td>
            <td width="15%" align="center">
                <a href="/order-detail">
                    <i className="fa fa-gift fa-2x" />
                </a>&nbsp;
            </td>
        </tr>);
    }
    let [users, setUsers] = useState([])
    useEffect(() => {
        let apiAddress = 'https://www.theeasylearnacademy.com/shop/ws/users.php'
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response)
            let error = response.data[0]['error']
            if (error !== 'no')
                console.log(error)
            else if (response.data[1]['tptal'] === 0) {
                console.log(error)
            }
            else {
                response.data.splice(0, 2)
                setUsers(response.data);
            }
        })
    })
    return (
        <div id="wrapper">
            <AdminManu />
            <div id="content-wrapper" className="d-flex flex-column">
                {/* Main Content */}
                {/* <div id="content"> */}
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
                        <div className="card-body">
                            <div className="container-fluid">
                                <div className="card shadow">
                                    <div className="card-header d-flex justify-content-between text-bg-primary">
                                        <h3 className="mb-1">Users</h3>
                                    </div>
                                    <div className="card-body">
                                        <table className="table table-bordered table-sm">
                                            <thead>
                                                <tr>
                                                    <th className="text-bg-light-gray">id</th>
                                                    <th className="text-bg-light-gray">Email</th>
                                                    <th className="text-bg-light-gray">Mobile</th>
                                                    <th className="text-bg-light-gray text-center">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* <tr>
                                                    <td>171298</td>
                                                    <td>Nayan@gmail.com</td>
                                                    <td>1234567890</td>
                                                    <td width="15%" align="center">
                                                        <a href="admin-orders.html">
                                                            <i className="fa fa-gift fa-2x" /> </a>&nbsp;
                                                    </td>
                                                </tr> */}
                                                   {users.map((item) => DisplayUser(item))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}