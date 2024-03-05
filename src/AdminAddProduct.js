import AdminManu from "./AdminManu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import getBase from "./api";
import { ToastContainer } from "react-toastify";
export default function AdminAddProduct() {
    // state variable banava k j input ma store ty 
    let [catageryID, setCatageryID] = useState('')
    let [name, setName] = useState('')
    let [price, setPrice] = useState(0)
    let [stock, setStock] = useState(0)
    let [Weight, setWeight] = useState('')
    let [size, setSize] = useState('')
    let [photo, setPhoto] = useState('')
    let [islive, setIsLive] = useState('')
    let [detail, setDetail] = useState('')
    let navigator = useNavigate();

    var [categories, setCategory] = useState([]); // state categery arry 

    useEffect(() => {
        if (categories.length === 0) {
            let apiAddress = 'https://www.theeasylearnacademy.com/shop/category.php';
            axios({
                method: 'get',
                responseType: 'json',
                url: apiAddress
            }).then((response) => {
                console.log(response);
                let error = response.data[0]['error'];
                if (error !== 'no')
                    console.log(error);
                else if (response.data[1]['total'] === 0) {
                    console.log('no category found');
                }
                else {
                    response.data.splice(0, 2);
                    setCategory(response.data); //set state array 
                }
            }).catch((error) => {
                console.log(error);
                if (error.code === 'ERR_NETWORK') {
                    console.log();
                }
            });
        }
    });


    let insertProduct = function (event) {
        event.preventDefault();
        console.log(catageryID, name, price, stock, Weight, size, islive, detail, photo);
        let apiAddress = 'https://www.theeasylearnacademy.com/shop/ws/insert_product.php'
        let form = new FormData()
        form.append('catageryid', catageryID)
        form.append('name', name)
        form.append('price', price)
        form.append('stock', stock)
        form.append('Weight', Weight)
        form.append('size', size)
        form.append('photo', photo)
        form.append('islive', islive)
        form.append('detail', detail)
        console.log(FormData)
        axios({
            method: 'post', // server per data upload karva na hoy tyare post method use ty che 
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
                            navigator("/product");
                        }, 2000);
                    }
                }
            })
            .catch((error) => {
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
                                <h3>Add New Product</h3>
                                <Link to="/product" className="btn btn-primary">Back</Link>
                            </div>
                            <div className="card-body">
                                <form onSubmit={insertProduct}>
                                    <div className="row g-3">
                                        {/* 1st row */}
                                        <div className="col-md-12 d-flex justify-content-between">
                                            <div className="mt-3">
                                                <label htmlFor="categoryid" className="form-label text-center">Category
                                                    ID</label>
                                                <select className="form-select" id="categoryid" onChange={(event) => setCatageryID(event.target.value)} name="categoryid" value={catageryID} autofocus>
                                                    {categories.map((item) => {
                                                        return (<option value={item.id}>{item.title}</option>)
                                                    })}
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
                                            <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)} id="title" name="title" required />
                                        </div>
                                        <div className="col-md-4 mt-4">
                                            <label htmlFor="price" className="form-label">Price</label>
                                            <input type="number" className="form-control" id="price" name="price" value={price} onChange={(event) => setPrice((event.target.value))} required />
                                        </div>
                                        <div className="col-md-4 mt-4">
                                            <label htmlFor="stock" className="form-label">Stock</label>
                                            <input type="number" className="form-control" id="stock" name="stock" value={stock} onChange={(event) => setStock(event.target.value)} required />
                                        </div>
                                        {/* 2nd row */}
                                        <div className="col-md-4 mt-3">
                                            <label htmlFor="weight" className="form-label">Weight</label>
                                            <input type="text" className="form-control" id="weight" name="weight" value={Weight} onChange={(event) => setWeight(event.target.value)} required />
                                        </div>
                                        <div className="col-md-4 mt-3">
                                            <label htmlFor="size" className="form-label">Size</label>
                                            <input type="text" className="form-control" id="size" name="size" value={size} onChange={(event) => setSize(event.target.value)} required />
                                        </div>
                                        <div className="col-md-4 mt-3">
                                            <label htmlFor="photo" className="form-label">Photo</label>
                                            <input type="file" className="form-control" id="photo" accept="Image/*" onChange={(event) => setPhoto(event.target.files[0])} name="photo" />
                                        </div>
                                        {/* 3rd row */}
                                        <div className="col-md-2 mt-3">
                                            <label className="form-check-label d-block">Is Live</label>
                                            <div className="form-check form-check">
                                                <input className="form-check-input" type="radio" name="islive" onChange={(event) => setIsLive(event.target.value)} Value={1} id="yes" required />
                                                <label className="form-check-label" htmlFor="yes">Yes</label>
                                            </div>
                                            <div className="form-check form-check">
                                                <input className="form-check-input" type="radio" name="islive" onChange={(event) => setIsLive(event.target.value)} Value={0} id="no" required />
                                                <label className="form-check-label" htmlFor="no">No</label>
                                            </div>
                                        </div>
                                        <div className="col-md-7 mt-3">
                                            <label htmlFor="detail" className="form-label">Detail</label>
                                            <textarea className="form-control" id="detail" name="detail" rows={3} onChange={(event) => setDetail(event.target.value)} value={detail} />
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

