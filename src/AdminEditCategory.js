import AdminManu from "./AdminManu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import getBase, { getImageBase } from "./api";
import { useNavigate } from "react-router-dom";

export default function AdminEditCategory() {

  let { categeryid } = useParams()
  let [title, setTitle] = useState('')
  let [photo, setPhoto] = useState('')
  let [oldPhoto, setOldPhoto] = useState('')
  let [islive, setIsLive] = useState('')
  let [isFetched, setIsFetched] = useState(false);
  let navigator = useNavigate();

  console.log(categeryid)

  useEffect(() => {
    if (isFetched === false) {
      let apiAddress = 'https:www.theeasylearnacademy.com/shop/ws/category.php?id=' + categeryid
      console.log(apiAddress)
      axios({
        method: 'get',
        responseType: 'json',
        url: apiAddress
      }).then((response) => {
        console.log(response)
        let error = response.data[0]['error'];
        if (error !== 'no') {
          console.log(error);
        }
        else if (response.data[1]['total'] === 0) {
          console.log("category not found");
        }
        else {
          setTitle(response.data[2]['title']);
          setOldPhoto(response.data[2]['photo']);
          setIsLive(response.data[2]['islive']);
          setIsFetched(true)
        }
      })
    }
  })
  let updateCategery = function (event) {
    event.preventDefault();
    console.log(title, photo, islive);
    let apiAddress = 'https:www.theeasylearnacademy.com/shop/ws/update_category.php'
    let form = new FormData()
    form.append('title', title)
    form.append('photo', photo)
    form.append('islive', islive)
    form.append('id', categeryid)
    axios({
      method: 'post',
      responseType: 'json',
      data: form,
      url: apiAddress
    })
      .then((response) => {
        console.log(response);
        let error = response.data[0]['error'];
        if (error !== 'no')
          console.log(error);
        else {
          let success = response.data[1]['success'];
          let message = response.data[2]['message'];
          if (success === 'no')
            console.log(message);
          else {
            console.log(message);
            setTimeout(() => {
              navigator("/catagery");
            }, 2000);
          }
        }
      }).catch((error) => {
        if (error.code === 'ERR_NETWORK')
          console.log();
      })
  }

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
                <h3>Catagery</h3>
                <Link to="/catagery" className="btn btn-primary">Back</Link>
              </div>
            </div>
            <div className="card-body">
              {/* <h4 class="mb-4">Add New Product</h4> */}
              <div className="row">
                <div className="col-3">
                  <img src={"https://www.theeasylearnacademy.com/shop/images/category/" + oldPhoto} className="img-fluid" />
                </div>
                <div className="col-9">
                  <form onSubmit={updateCategery}>
                    <div className="mb-4">
                      <label htmlFor="titel" className="form-label"> Titel </label>
                      <input type="text" name="titel" id="titel" value={title} onChange={(event) => setTitle(event.target.value)} className="form-control" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="img" className="form-label"> Product Image </label>
                      <input type="file" name="img" id="img" className="form-control" onChange={(event) => setPhoto(event.target.files[0])} accept="Image/*" />
                    </div>
                    <div className="mb-4">
                      <b>Is this category live?</b>
                      <div className="form-check">
                        <input type="radio" name="islive" id="yes" className="form-check-input" Value={1} onChange={(event) => setIsLive(event.target.value)} />
                        <label className="form-check-lebel" htmlFor="yes">Yes</label>
                      </div>
                      <div className="form-check">
                        <input type="radio" name="islive" id="no" Value={0} onChange={(event) => setIsLive(event.target.value)} className="form-check-input" />
                        <label className="form-check-lebel" htmlFor="no">No</label>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit" name="submit" className="btn btn-info">
                        Save Catagery</button>&nbsp;
                      <button type="reset" name="reset" className="btn btn-danger">
                        Clear
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}