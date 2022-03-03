import logo from "./logo.svg";
import "./App.css";
import {connect} from 'react-redux'
import { fetchData } from "./redux/Actions";

function App(props) {
  const handleFetchData=()=>{
    props.fetchData(2);
  }
  return (
    <div className="App">
      <button className="btn btn-primary" onClick={handleFetchData}>
        Fetch
      </button>
      <div>
        {
          props.user
        }
      </div>
    </div>
  );
}
const mapStateToProps=(state)=>{
  return{
    user:state.fetchDataReducer.user,
    error:state.fetchDataReducer.error
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    fetchData:(id)=>{
      dispatch(fetchData(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
