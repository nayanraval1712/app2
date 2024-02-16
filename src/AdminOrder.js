import AdminManu from "./AdminManu";
export default function AdminOrder() {
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
                                {/* <a href="admin-add-category.html" class="btn btn-primary">Add New Catagery</a> */}
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
                                        <tr>
                                            <td>1</td>
                                            <td>Dec 17 1998</td>
                                            <td>10000</td>
                                            <td>Order Conform</td>
                                            <td>Nayan Raval <br /> Bhavnager 364002</td>
                                            <td>
                                                {/* <a href="admin-edit-category.html"><button  class="btn btn-info mb-2"><i class="fa-regular fa-pen-to-square "></i> Edite</button></a><br> */}
                                                <a href="admin-order-detail.html"><button className="btn btn-info mb-2"><i className="fa-solid fa-eye" /> View</button></a> <br />
                                                {/* <button class="btn btn-info mb-2"><i class="fa-solid fa-eraser"></i>Remove</button> */}
                                            </td>
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