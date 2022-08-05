import './AllCustomers.css'
import Customer from '../Customer/Customer'

const AllCustomers = ({ profiles }) => {

  return (
    <div className="shell">
      <h2>Customers</h2>
      {profiles.map((profile) => (
        <Customer profile={profile} key={profile.id} />
      ))}
    </div>
  )
}

export default AllCustomers