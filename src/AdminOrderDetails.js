import AdminManu from "./AdminManu";
export default function AdminOrderDetails() {
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
                                    <a href="/order" className="btn btn-primary">Back</a> &nbsp;
                                    <button className="btn btn-primary" type="button" onClick={() => window.print()}>
                                        Print Invoice
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <tbody><tr>
                                        <th>Bill No.</th>
                                        <td>012345</td>
                                        <th>Custamer Id</th>
                                        <td>Nayan@123</td>
                                    </tr>
                                        <tr>
                                            <th>Date</th>
                                            <td>17 Dec 1998</td>
                                            <th>Name</th>
                                            <td>Raval Nayan</td>
                                        </tr>
                                        <tr>
                                            <th>Amount</th>
                                            <td>$400</td>
                                            <th>Adress</th>
                                            <td>Amsterdam</td>
                                        </tr>
                                        <tr>
                                            <th>Payment Status</th>
                                            <td>Paid</td>
                                            <th>City</th>
                                            <td>Netherlands</td>
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
                                            <td>40050</td>
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