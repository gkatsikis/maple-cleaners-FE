import './BossView.css'

// Components
import PendingRequests from '../../components/PendingRequests/PendingRequests';
import CurrentRequests from '../../components/CurrentRequests/CurrentRequests';

// React & Services
import { Link } from 'react-router-dom'


const BossView = ({ user, orders, profiles }) => {
  
  return ( 
    <div className="shell">
      <h1>Welcome Boss</h1>
      <div className="top">
        <PendingRequests orders={orders} profiles={profiles} />
        <CurrentRequests profiles={profiles} orders={orders} />

      </div>
      <div className="bottom">
        <Link 
        to="/orderhistory"
        className="orderhistory-btn"
        >
          <h2>Order History</h2>
        </Link>
        <Link 
          to="/allcustomers"
          className="allcustomers-btn"
        >
          <h2>All Customers</h2>
        </Link>
      </div>
    </div>
   );
}
 
export default BossView;