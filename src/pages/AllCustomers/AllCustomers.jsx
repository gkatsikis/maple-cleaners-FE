import './AllCustomers.css'
import Customer from '../../components/Customer/Customer'
import { Link } from 'react-router-dom'

const AllCustomers = ({ profiles }) => {
  console.log('here they are', profiles)
  return (
    <div className="shell">
      <h2>Customers</h2>
      {profiles.map((profile) => (
        <Link key={profile.id} to={`/customer/${profile.id}`}>
          <Customer profile={profile} />
        </Link>
      ))}
    </div>
  )
}

export default AllCustomers