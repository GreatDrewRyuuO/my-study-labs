import EmoloyeeList from "./components/EmployeeList";
import EmployeeModel from "./components/EmployeeModel";
import Engine from "./components/Engine"

function App() {
  const {
    employees,
    isOpen,
    currentEmployee,
    openModel,
    closeModel,
    addOrUpdateEmp,
    deleteEmp,
  } = Engine();
  return (

    <div className='bg-gradient-to-br from-black to-violet-950 min-h-screen w-full'>
      <button className="text-white bg-violet-800 rounded-sm p-4 mt-4" onClick={() => openModel(null)}>เพิ่มพนักงาน</button>
  <EmoloyeeList employees={employees} openModel={openModel} deleteEmployee={deleteEmp}/>
  <EmployeeModel isOpen={isOpen} closeModel={closeModel} currentEmployee={currentEmployee} addOrUpdateEmp={addOrUpdateEmp}/>
    </div>
  )
}

export default App
