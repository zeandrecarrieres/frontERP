import React from 'react'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import { FaRegTrashAlt } from "react-icons/fa";

function Transaction({transaction}) {
    

    const deleteTransaction = async (e) => {
        await fetch("http://localhost:3001/Transaction/"+e, {
            method: "DELETE",
    
        })
        
    }

    return (
        <div className="transaction-item">
            <div className="champ">{transaction.date}</div>
            {/* <div className="champ">{format(transaction.date,  'EEEEEE, d, MMMM', {locale: ptBR})}</div> */}
            <div className="champ">{transaction.type}</div>
            <div className="champ">{transaction.product}</div>
            <div className="champ">{transaction.quantity}</div>
            <div className="champ">{transaction.price} </div> 
            <div className="champ"> {transaction.price_total} </div> 
            <button className="del-btn" value={transaction._id} onClick={(e) =>deleteTransaction(e.target.value)}><FaRegTrashAlt />delete</button>    
        </div>
     )
}

export default Transaction
