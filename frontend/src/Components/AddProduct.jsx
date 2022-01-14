import React, {useState, useContext} from 'react';
import { AuthContext } from '../Context/AuthProvider';
import axios from 'axios';
import * as p from './CSS/addProduct.module.css';

const AddProduct = () => {
    const [pname, setPName] = useState("");
    const [tags, setTags] = useState("");
    const [description, setDescription] = useState("");
    const [sellingPrice, setSPrice] = useState("");
    const [discount, setD] = useState(0);
    const [file1, setFile1] = useState({});
    const [file2, setFile2] = useState({});
    const [file3, setFile3] = useState({});
    const [file4, setFile4] = useState({});
    const {csrftoken} = useContext(AuthContext);
    function onsubmit(e){
        let dis = sellingPrice - discount*sellingPrice/100;
        var data = new FormData();
        data.append('tags', tags);
        data.append('productName', pname);
        data.append('description', description);
        data.append('sellingPrice', sellingPrice);
        data.append('discountPrice', dis);
        data.append('image1', file1);
        data.append('image2', file2);
        data.append('image3', file3);
        data.append('image4', file4);
        console.log(file4);
        // console.log(dat);
        axios.post('http://127.0.0.1:8000/registerProduct', data, {
            headers:{
                "content-type":'multipart/form-data',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRFToken': csrftoken,
            }
        })
        .then(res => {console.log(res)})
        .catch(err => console.log(err));
    }

    const classLister = styleObject => (...classList) =>
    classList.reduce((list, myClass) => {
        let output = list;
        if (styleObject[myClass]) {
        if (list) output += ' '; // appends a space if list is not empty
        output += styleObject[myClass]; 
        //Above: append 'myClass' from styleObject to the list if it is defined
        }
        return output;
    }, '');
    const classes = classLister(p);
    return ( <div className={p['main-product-container']}>
        <div className={p["product-container"]}>
            <div className={`${p['product-name']} ${p.same}`}>
                <legend className={p['legend-span']}>Product Name</legend>
                <input className={classes('input')} type="text" placeholder="product name" value={pname} onChange={(e)=>{setPName(e.target.value)}} required/>
            </div>
            <div className={classes('tags', 'same')}>
                <legend className={classes('legend-span')}>Tags</legend>
                <input className={classes('input')} type="text" placeholder='Tags' value={tags} onChange={(e)=>{setTags(e.target.value)}} required/>
            </div>
            <div className={classes('description', 'same')}>
                <legend className={classes('legend-span')}>Description</legend>
                <input className={classes('input')} type="text" placeholder="Description" value={description} onChange={(e)=>{setDescription(e.target.value)}} required/>
            </div>
            <div className={classes('sellingPrice', 'same')}>
                <legend className={classes('legend-span')}>Selling Price</legend>
                <input className={classes('input')} type="text" placeholder="Selling Price" value={sellingPrice} onChange={(e)=>{setSPrice(e.target.value)}} required/>
            </div>
            <div className={classes('discount-percent', 'same')}>
                <span className={classes('legend-span')}>Discount</span>
                <input className={classes('input')} type="number" value={discount} min="0" max="50" name="" id="" onChange={(e)=>{setD(e.target.value)}} required/>
            </div>
            <div className={classes('images', 'same')}>
                <legend className={classes('legend-span')}>Images</legend>
                <input type="file" className={classes('file')} name="" id="" accept="image/png, image/jpeg, image/jpg" onChange={(e)=>{setFile1(e.target.files[0])}} required/>
                <br />
                <input type="file" name="" id="" accept="image/png, image/jpeg, image/jpg" onChange={(e)=>{setFile2(e.target.files[0])}} required/>
                <br />
                <input type="file" name="" id="" accept="image/png, image/jpeg, image/jpg" onChange={(e)=>{setFile3(e.target.files[0])}} required/>
                <br />
                <input type="file" name="" id="" accept="image/png, image/jpeg, image/jpg" onChange={(e)=>{setFile4(e.target.files[0])}} required/>
            </div>
            <button onClick={onsubmit}>Submit</button>
        </div>
    </div> );
}
 
export default AddProduct;