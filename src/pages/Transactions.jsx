import React, { useState, useEffect } from "react";
import Transaction from '../components/Transaction'

function Transactions({addCount}) {
  const [transactions, setTransactions] = useState([]);
  const [totalInd, setTotalInd] = useState(0);

  const getTotal = () => {
    const total = transactions.reduce((prev, transaction)=>{
        return prev + transaction.price_total;
    },0)
    setTotalInd(total)
}



  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  },[addCount]);

  return (

    <div>
      <div className="transactions-list">
      {transactions.map((transaction)=>
        (
          <Transaction key={transaction._id} transaction={transaction} />
          )
         
          )}
          <div className="total-indicateur">
            <h2>Total</h2>
            {/* {console.log(totalInd)} */}
            <p>{totalInd}</p>
            {/* <p> {transactions.reduce((transaction, acc)=>transaction.price_total + transaction.price_total,0)}</p> */}
          </div>
      </div>
     
    </div>
  );
}

export default Transactions;
