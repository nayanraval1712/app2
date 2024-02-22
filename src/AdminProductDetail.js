import AdminManu from "./AdminManu";
export default function AdminProductDetail() {
    return (
        <div id="wrapper">
            <AdminManu />
            <div id="content-wrapper" className="d-flex flex-column">
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
                                <h3>Product Details</h3>
                                <a href="/product" className="btn btn-primary">Back</a>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <img src="https://picsum.photos/400" alt />
                                    </div>
                                    <div className="col-sm-6">
                                        <table className="table text-bg-light-gray table-striped">
                                            <tbody><tr>
                                                <td>Product Id</td>
                                                <td />
                                            </tr>
                                                <tr>
                                                    <td>Catagery</td>
                                                    <td />
                                                </tr>
                                                <tr>
                                                    <td>Prise</td>
                                                    <td />
                                                </tr>
                                                <tr>
                                                    <td>Stock</td>
                                                    <td />
                                                </tr>
                                                <tr>
                                                    <td>Weight</td>
                                                    <td />
                                                </tr>
                                                <tr>
                                                    <td>Size</td>
                                                    <td />
                                                </tr>
                                                <tr>
                                                    <td>Is Live</td>
                                                    <td />
                                                </tr>
                                            </tbody></table>
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