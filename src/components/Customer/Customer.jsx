import './Customer.css'

const Customer = ({ profile }) => {
  
  return(
    <div className="customer">
        <h3 className="custName">{profile.name}</h3>
        <h4 className="custBal">{profile.balance}</h4>
    </div>
  )
}

export default Customer