import {useState} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  
  const [donation, setDonation] = useState(0)
  const [cause, setCause] = useState("")

  const editAmount = (e)=>{
    e.preventDefault()
    // console.log(`BEFORE: ${donation}`)
    const amount = e.target.value
    setDonation(amount)
    // console.log(`AFTER: ${donation}`)
  }

  const editDonationAmount = (e)=>{
    e.preventDefault()
    const amount = e.target.value
    setDonation(amount)
  }

  const editSelectedCause = (e)=>{
    e.preventDefault()
    const newCause = e.target.value
    setCause(newCause)
  }
  return (
    <div>
      <h1>Rutgers Mutual Aid</h1>
      <h4>Rutgers Mutual Aid collects money from the Rutgers community and distributes it to the most vulnerable members</h4>
      <h5>Some causes</h5>
      <form>
        <select name = 'causes' onChange ={editSelectedCause}>
          <option value = 'H'>For H: needs $300 for rent
          </option>
          <option value = 'E'> For A: needs $100 for a coat</option>
          <option value = 'A'> For A: needs $100 for a rent</option>
          <option value = 'F'> For A: needs $100 for a food</option>
        </select>
      </form>
      {/* <form onSubmit = {makeDonation}> */}
        <input type = 'text' name = 'amount' placeholder = 'enter amount you want to donate' onChange = {editAmount}></input>
        {/* <input type = 'submit'></input>
      </form> */}
      


      {/* <form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="business" value="kuhuhalder2701@gmail.com" />
<input type="hidden" name="currency_code" value="USD" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form> */}

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_xclick"/>
<input type="hidden" name="business" value="rutgersmutualaid@gmail.com"/>
<input type="hidden" name="lc" value="US"/>
<input type="hidden" name="item_name" value={cause}/>
<input type="hidden" name="amount" value={donation}/>
<input type="hidden" name="currency_code" value="USD"/>
<input type="hidden" name="button_subtype" value="services"/>
<input type="hidden" name="no_note" value="0"/>
<input type="hidden" name="tax_rate" value="0.000"/>
<input type="hidden" name="shipping" value="0.00"/>
<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
    </div>
  );
}

export default App;
