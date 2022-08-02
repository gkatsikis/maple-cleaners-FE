import './AllCustomers.css'

interface Profile {
  id: number;
  name: string;
  address: string;
  zipcode: number;
  user_id: number;
  balance: number;
  role: string;
}

const AllCustomers = ({ profiles }: Profile) => {

  return (
      <h2>Customers</h2>
      
  )
}

export default AllCustomers