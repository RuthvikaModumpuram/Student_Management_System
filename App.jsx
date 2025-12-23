import AddStudent from "./Components/AddStudent";
import UpdateStudent from "./Components/UpdateStudent";
import ViewStudents from "./Components/ViewStudents";
import DeleteStudent from "./Components/DeleteStudent"
import {useState} from 'react'
import './App.css'
function App() {
  const [refresh, setRefresh] = useState(false);
  const refreshTable = () => {
    setRefresh(!refresh);
  };
  return (
   <div className="app-container">
  <h1>Student Management</h1>
  <div className="form-card">
    <AddStudent onSuccess={refreshTable} />
  </div>
  <div className="form-card">
    <UpdateStudent onSuccess={refreshTable} />
  </div>
  <div className="form-card">
    <DeleteStudent onSuccess={refreshTable} />
  </div>
  <ViewStudents refresh={refresh} />
</div>
  );
}
export default App;