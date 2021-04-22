import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router";

function EditProduct() {
  const [product, setProduct] = useState({})
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [unit, setUnity] = useState("");
  const [grade, setGrade] = useState("");
  const [mult, setMult] = useState("");
  const [quantity, setQuantity] = useState("");
  const [coast, setCoast] = useState("");
  const [price, setPrice] = useState("");
  const [edit, setEdit] = useState(false);

  const product_id = useParams(id)
  console.log(product_id);

  useEffect(() => {
    fetch(`http://localhost:3001/product/${product_id.id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data)
        setId(data.name)
        setName(data.name)
        setDescription(data.description)
        setCategory(data.category)
        setUnity(data.unit)
        setMult(data.mult)
        setQuantity(data.quantity)
        setPrice(data.price)
      });
  },[edit]);


  const submit = async (e) => {
    e.preventDefault()
    await fetch(`http://localhost:3001/product/${product_id.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        name,
        description,
        category,
        unit,
        grade,
        mult,
        quantity,
        price,
      }),
    });

    setEdit(true);
  };

  if(edit){
    return <Redirect to="/prod_list" />;
  }
  return (
    <div className="add-product">
      <h1>Edit product</h1>
      <div className="form-group">
        <form onSubmit={submit}>
          <div className="form-line">
            <input className="little-field"
              type="text"
              placeholder="Id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />

            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <select className="select-field" onChange={(e) => setCategory(e.target.value)} value={product.category}>
              <option value="Sport">Sport</option>
              <option value="Hobby">Hobby</option>
            </select>
          </div>

          <div className="form-line">
            <input
              type="text"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-line">
            <input
              type="text"
              placeholder="unit"
              value={unit}
              onChange={(e) => setUnity(e.target.value)}
            />
            <input
              type="text"
              placeholder="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
            <input
              type="text"
              placeholder="mult"
              value={mult}
              onChange={(e) => setMult(e.target.value)}
            />
          </div>

          <div className="form-line">
            <input
              type="text"
              placeholder="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <input
              type="text"
              placeholder="coast"
              value={coast}
              onChange={(e) => setCoast(e.target.value)}
            />
            <input
              type="text"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button type="submit">Create Product</button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
