import './Request.css'

const Request = (props) => {
  return ( 
    <div className="shell">
      <h2>Request Pick Up</h2>
      <form>
        <input type="date" />
        <input type="time" />
        <textarea className="commentBox" />
      </form>
    </div>
   );
}
 
export default Request;