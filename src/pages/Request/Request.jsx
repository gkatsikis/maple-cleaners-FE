import './Request.css'

const Request = (props) => {
  return ( 
    <div className="shell">
      <h1>Request Pick Up</h1>
      <form>
        <input type="date" />
        <input type="time" />
        <textarea />
      </form>
    </div>
   );
}
 
export default Request;