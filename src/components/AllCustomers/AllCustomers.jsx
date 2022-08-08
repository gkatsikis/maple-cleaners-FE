import './AllCustomers.css'
import Customer from '../Customer/Customer'
import { Link } from 'react-router-dom'

const AllCustomers = ({ profiles }) => {

  return (
    <div className="shell">
      <h2>Customers</h2>
      {profiles.map((profile) => (
        <Link to={`/customer/${profile.id}`}>
          <Customer profile={profile} key={profile.id} />
        </Link>
      ))}
    </div>
  )
}

export default AllCustomers