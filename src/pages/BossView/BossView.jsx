import './BossView.css'
import PendingRequests from '../../components/PendingRequests/PendingRequests';

const BossView = (props) => {
  return ( 
    <div className="shell">
      <h1>Welcome Boss</h1>
      <PendingRequests />
      {/*
      CurrentRequests
      Request History Button
      Search Customers 
      */}
    </div>
   );
}
 
export default BossView;