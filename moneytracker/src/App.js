
import './App.css';
import {useState, useEffect} from 'react';


function App() {

  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransaction] = useState([]);

  useEffect(() => {
    getTransactions().then(transactions => {

    })
  });


    
  async function getTransactions() {
    const url = process.env.REACT_APP_API_URL + '/transactions'
    const response = await fetch(url);
    return await response.json();

  }

  function addnewtransaction(ev){
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/transaction";
    const price = name.split('')[0];
    fetch(url, init:{
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(value: {
        name, substring(price, length+1)
        description, 
        datetime})
    }
    ).then(response=> {
      response.json().then(() => {
        console.log('result', json);
      });
    });

  );


  return (
    <main>
      <h1>$400<span>.00</span> </h1>
        <form onSubmit={addnewtransaction}>
          <div className="basic">
            <input type='text' 
            value={name}
            onChange={ ev => setName(ev.target.value)}
            placeholder='+$200.00'></input>

            <input value='datetime-local'
            onChange={ ev => setName(ev.target.value)}
            type='datetime-local'></input>
          </div>

          <div className="description">
            <input type='text' placeholder='description'></input>
          </div>

          <button type="submit">Add new transaction</button> 
        
        </form>

        <div className='transactions'>


          <div className='transaction'>
            <div className="left">
              <div className="name"> Samsung TV</div>
              <div className="description"> Replace old TV </div>
            </div>
            <div className="right">
                <div className="price"> 500</div>
                <div className="datetime">2024-07-01 8:15</div>
            </div>
          </div>

          <div className='transaction'>
            <div className="left">
              <div className="name"> Samsung TV</div>
              <div className="description"> Replace old TV </div>
            </div>
            <div className="right">
                <div className="price red"> -500</div>
                <div className="datetime">2024-07-01 8:15</div>
            </div>
          </div>

          <div className='transaction'>
            <div className="left">
              <div className="name"> New gig job</div>
              <div className="description"> Replace old TV </div>
            </div>
            <div className="right">
                <div className="price green">+400</div>
                <div className="datetime">2024-07-01 8:15</div>
            </div>
          </div>

          <div className='transaction'>
            <div className="left">
              <div className="name"> Iphone</div>
              <div className="description"> Replace old TV </div>
            </div>
            <div className="right">
                <div className="price red">-900</div>
                <div className="datetime">2024-07-01 8:15</div>
            </div>
          </div>


        </div> 




    </main>
  );
}

export default App;
