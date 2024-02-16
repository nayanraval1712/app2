import AdminManu from "./AdminManu";
export default function AdminAddProduct() {
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
                                <h3>Add New Product</h3>
                                <a href="admin-product.html" className="btn btn-primary">Back</a>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row g-3">
                                        {/* 1st row */}
                                        <div className="col-md-12 d-flex justify-content-between">
                                            <div className="mt-3">
                                                <label htmlFor="categoryid" className="form-label text-center">Category
                                                    ID</label>
                                                <select className="form-select" id="categoryid" name="categoryid" required autofocus>
                                                    <option value={1}>Category 1</option>
                                                    <option value={2}>Category 2</option>
                                                </select>
                                            </div>
                                            {/* Buttons */}
                                            <div className="col-md-3">
                                                <button type="submit" className="btn btn-primary mt-4 w-100">Save
                                                    Changes</button>
                                                <button type="reset" className="btn btn-dark w-100 mt-1">Clear</button>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-4">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input type="text" className="form-control" id="title" name="title" required />
                                        </div>
                                        <div className="col-md-4 mt-4">
                                            <label htmlFor="price" className="form-label">Price</label>
                                            <input type="number" className="form-control" id="price" name="price" required />
                                        </div>
                                        <div className="col-md-4 mt-4">
                                            <label htmlFor="stock" className="form-label">Stock</label>
                                            <input type="number" className="form-control" id="stock" name="stock" required />
                                        </div>
                                        {/* 2nd row */}
                                        <div className="col-md-4 mt-3">
                                            <label htmlFor="weight" className="form-label">Weight</label>
                                            <input type="text" className="form-control" id="weight" name="weight" required />
                                        </div>
                                        <div className="col-md-4 mt-3">
                                            <label htmlFor="size" className="form-label">Size</label>
                                            <input type="text" className="form-control" id="size" name="size" required />
                                        </div>
                                        <div className="col-md-4 mt-3">
                                            <label htmlFor="photo" className="form-label">Photo</label>
                                            <input type="file" className="form-control" id="photo" name="photo" required />
                                        </div>
                                        {/* 3rd row */}
                                        <div className="col-md-2 mt-3">
                                            <label className="form-check-label d-block">Is Live</label>
                                            <div className="form-check form-check">
                                                <input className="form-check-input" type="radio" name="islive" id="yes" defaultValue="yes" required />
                                                <label className="form-check-label" htmlFor="yes">Yes</label>
                                            </div>
                                            <div className="form-check form-check">
                                                <input className="form-check-input" type="radio" name="islive" id="no" defaultValue="no" required />
                                                <label className="form-check-label" htmlFor="no">No</label>
                                            </div>
                                        </div>
                                        <div className="col-md-7 mt-3">
                                            <label htmlFor="detail" className="form-label">Detail</label>
                                            <textarea className="form-control" id="detail" name="detail" rows={3} required defaultValue={""} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}