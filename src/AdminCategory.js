import AdminManu from "./AdminManu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function AdminCategory() {

  // creat a disply catagery inner function 
  let Displaycategory = function (item) {
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.titel}</td>
        <td><img src={"https://www.theeasylearnacademy.com/shop/images/category/" + item.photo} className="img-fluid" /></td>
        <td>{(item.islive == '1') ? 'Yes' : 'No'}</td>
        <td>
          <Link to='/editcatagery'><button className="btn btn-info mb-2">
            <i className="fa-regular fa-pen-to-square" /> Edite
          </button></Link><br />
          {/* <a href="admin-product-detail.html"><button class="btn btn-info mb-2"><i class="fa-solid fa-eye"></i> View</button></a> <br> */}
          <button className="btn btn-info mb-2">
            <i className="fa-solid fa-eraser" />Remove
          </button>
        </td>
      </tr>
    )
  }

  // creat steate arey 
  let [category, setCatagery] = useState([])
  // use hook effect 
  useEffect(() => {
    let apiAddress = "https://www.theeasylearnacademy.com/shop/ws/category.php"
    fetch(apiAddress)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let error = data[0]['error']
        console.log(error);
        if (error !== 'no')
          console.log('error')
        else if (data[1]['total'] === 0) {
          console.log("error ")
        }
        else {
          data.splice(0, 2);
          console.log(data);
          setCatagery(data) ;
        }
      })
      .catch((error) => {
        console.log(error)
        console.log('error he bhai ...')
      })
  })
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
                <h3>Catagery</h3>
                <a href="/addcatagery" className="btn btn-primary">Add New Catagery</a>
              </div>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-bg-light-gray">No</th>
                      <th className="text-bg-light-gray">Product Name</th>
                      <th width='10%' className="text-bg-light-gray" >Photos</th>
                      <th className="text-bg-light-gray">Is Live *</th>
                      <th className="text-bg-light-gray">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.map((item) => Displaycategory(item))}
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