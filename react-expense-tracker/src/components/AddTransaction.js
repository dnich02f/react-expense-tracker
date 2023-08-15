import React, {useState, Fragment} from 'react';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0)

    return (
        <Fragment>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." onChange={(e) => setText(e.target.value)} value={text}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                    (negative - expense , positive - income)</label>
                    <input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </Fragment>
    )
}
