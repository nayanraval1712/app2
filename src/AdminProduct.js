import AdminManu from "./AdminManu";
export default function AdminProduct() {
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
                                <h3>Produces</h3>
                                <a href="/addproduct" className="btn btn-primary">Add to New Products</a>
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="text-bg-light-gray">No</th>
                                            <th className="text-bg-light-gray">Product Name</th>
                                            <th className="text-bg-light-gray">Photo</th>
                                            <th className="text-bg-light-gray">Price</th>
                                            <th className="text-bg-light-gray">Stock</th>
                                            <th className="text-bg-light-gray">Is Live</th>
                                            <th className="text-bg-light-gray">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>shoes</td>
                                            <td><img src="https://picsum.photos/200" alt className="img-fluid" /></td>
                                            <td>2500$</td>
                                            <td>In/Out Of Stock</td>
                                            <td>Sale is Live</td>
                                            <td><a href="/editproduct"><button className="btn btn-info mb-2"><i className="fa-regular fa-pen-to-square " /> Edite</button></a><br />
                                                <a href="/productdetail"><button className="btn btn-info mb-2"><i className="fa-solid fa-eye" /> View</button></a> <br />
                                                <button className="btn btn-info mb-2"><i className="fa-solid fa-eraser" />Remove</button> </td>
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