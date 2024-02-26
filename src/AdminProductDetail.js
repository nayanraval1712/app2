// import AdminManu from "./AdminManu";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// export default function AdminProductDetail() {
//     // use quary string in parmms vairable 
//     let { productid } = useParams();
//     let { product, setProduct } = useState({});

//     console.log(productid);

//     useEffect(() => {
//         if (productid === undefined) {
//             let apiAddress =  "https://www.theeasylearnacademy.com/shop/ws/product.php?productid=" +  productid 
//             // let apiAddress = `https://www.theeasylearnacademy.com/shop/ws/product.php?productid=` + productid;
//             fetch(apiAddress)
//                 .then((response) => response.json())
//                 .then((data) => {
//                     console.log(data);
//                     let error = data[0]['error']
//                     console.log(error);
//                     if (error !== 'no')
//                         console.log('error')
//                     else if (data[1]['total'] === 0) {
//                         console.log("error ")
//                     }
//                     else {
//                         data.splice(0, 2);
//                         console.log(data);
//                         setProduct(data);
//                     }
//                 })
//                 .catch((error) => {
//                     console.log(error)
//                     console.log('error he bhai ...')
//                 })
//         }
//     })

//     return (
//         <div id="wrapper">
//             <AdminManu />
//             <div id="content-wrapper" className="d-flex flex-column">
//                 <div id="content">
//                     <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
//                         <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
//                             <div className="input-group">
//                                 <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
//                                 <div className="input-group-append">
//                                     <button className="btn btn-primary" type="button">
//                                         <i className="fas fa-search fa-sm" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </form>
//                     </nav>
//                     <div className="container-fluid">
//                         <div className="card">
//                             <div className="card-header d-flex justify-content-between">
//                                 <h3>Product Details</h3>
//                                 <a href="/product" className="btn btn-primary">Back</a>
//                             </div>
//                             <div className="card-body">
//                                 <div className="row">
//                                     <div className="col-sm-6">
//                                         <img src={"https:www.theeasylearnacademy.com/shop/ws/images/product/" + product['photo']} className="img-fluid" alt />
//                                     </div>
//                                     <div className="col-sm-6">
//                                         <table className="table text-bg-light-gray table-striped">
//                                             <tbody><tr>
//                                                 <td>Product Id</td>
//                                                 <td>{product['id']}</td>
//                                             </tr>
//                                                 <tr>
//                                                     <td>Catagery</td>
//                                                     <td>
//                                                         {product['categorytitle']}
//                                                     </td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>Prise</td>
//                                                     <td>
//                                                         {product['price']}
//                                                     </td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>Stock</td>
//                                                     <td>
//                                                         {product['stock']}
//                                                     </td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>Weight</td>
//                                                     <td>
//                                                         {product['weight']}
//                                                     </td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>Size</td>
//                                                     <td>
//                                                         {product['size']}
//                                                     </td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>Is Live</td>
//                                                     <td>
//                                                         {product['islive']}
//                                                     </td>
//                                                 </tr>
//                                             </tbody></table>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// import AdminManu from "./AdminManu";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function AdminProductDetail() {
//     const { productid } = useParams();
//     const [product, setProduct] = useState({});

//     useEffect(() => {
//         if (productid !== undefined) {
//             let apiAddress = `https://www.theeasylearnacademy.com/shop/ws/product.php?productid=` + productid;
//             fetch(apiAddress)
//                 .then((response) => response.json())
//                 .then((data) => {
//                     console.log(data);
//                     let error = data[0]['error'];
//                     console.log(error);
//                     if (error !== 'no') {
//                         console.log('error');
//                     } else if (data[1]['total'] === 0) {
//                         console.log("error");
//                     } else {
//                         data.splice(0, 2);
//                         console.log(data);
//                         setProduct(data);
//                     }
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                     console.log('error he bhai ...');
//                 });
//         }
//     });

//     return (
//         <div id="wrapper">
//             <AdminManu />
//             <div id="content-wrapper" className="d-flex flex-column">
//                 <div id="content">
//                     <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
//                         <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
//                             <div className="input-group">
//                                 <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
//                                 <div className="input-group-append">
//                                     <button className="btn btn-primary" type="button">
//                                         <i className="fas fa-search fa-sm" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </form>
//                     </nav>
//                     <div className="container-fluid">
//                         <div className="card">
//                             <div className="card-header d-flex justify-content-between">
//                                 <h3>Product Details</h3>
//                                 <a href="/product" className="btn btn-primary">Back</a>
//                             </div>
//                             <div className="card-body">
//                                 <div className="row">
//                                     <div className="col-sm-6">
//                                         <img src={`https:www.theeasylearnacademy.com/shop/ws/product/`+ product['photo']} className="img-fluid" alt="" />
//                                     </div>
//                                     <div className="col-sm-6">
//                                         <table className="table text-bg-light-gray table-striped">
//                                             <tbody>
//                                                 <tr>
//                                                     <td>Product Id</td>
//                                                     <td>{productid['id']}</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>Category</td>
//                                                     <td>{product.categorytitle}</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>Price</td>
//                                                     <td>{product.price}</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>Stock</td>
//                                                     <td>{product.stock}</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>Weight</td>
//                                                     <td>{product.weight}</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>Size</td>
//                                                     <td>{product.size}</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>Is Live</td>
//                                                     <td>{product.islive}</td>
//                                                 </tr>
//                                             </tbody>
//                                         </table>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import AdminManu from "./AdminManu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdminProductDetail() {
    const { productid } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (product.id === undefined) {
            let apiAddress = `https://www.theeasylearnacademy.com/shop/ws/product.php?productid=` + productid;
            fetch(apiAddress)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    let error = data[0]['error'];
                    console.log(error);
                    if (error !== 'no') {
                        console.log('error');
                    } else if (data[1]['total'] === 0) {
                        console.log("error");
                    } else {
                        data.splice(0, 2);
                        console.log(data);
                        setProduct(data[0]);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    console.log('error he bhai ...');
                });
        }
    });

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
                                <h3>Product Details : {product['title']}</h3>
                                <a href="/product" className="btn btn-primary">Back</a>

                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <img src={`https://www.theeasylearnacademy.com/shop/ws/images/product/`+ product['photos']} className="img-fluid" />
                                    </div>
                                    <div className="col-sm-6">
                                        <table className="table text-bg-light-gray table-striped">
                                            <tbody>
                                                <tr>
                                                    <td>Product Id</td>
                                                    <td>{product.id}</td>
                                                </tr>
                                                <tr>
                                                    <td>Category</td>
                                                    <td>{product.categorytitle}</td>
                                                </tr>
                                                <tr>
                                                    <td>Price</td>
                                                    <td>{product.price}</td>
                                                </tr>
                                                <tr>
                                                    <td>Stock</td>
                                                    <td>{product.stock}</td>
                                                </tr>
                                                <tr>
                                                    <td>Weight</td>
                                                    <td>{product.weight}</td>
                                                </tr>
                                                <tr>
                                                    <td>Size</td>
                                                    <td>{product.size}</td>
                                                </tr>
                                                <tr>
                                                    <td>Is Live</td>
                                                    <td>{product.islive}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



