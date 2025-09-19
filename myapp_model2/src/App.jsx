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
    //ไล่สี gradiant ไปยัง ขวาล่าง จากสีดำไป สี ม่วง พร้อมกำหนด ให้ ความสูง ขั้นต่ำเป็น 100% ถ้าไม่มี content จะเป็น 0% พร้อมความกว้าง 100%
    <div className='bg-gradient-to-br from-black to-violet-950 min-h-screen w-full'>
      {/*กำหนดให้ตัวอักษรเป็น สีขาว พื้นหลังเป็นสีม่วง ขอบของปุ่มมีความโค้งเล็กน้อย พร้อม padding กับ margin-top = 4*/}
      <button className="text-white bg-violet-800 rounded-sm p-4 mt-4" onClick={() => openModel(null)}>เพิ่มพนักงาน</button>
  <EmoloyeeList employees={employees} openModel={openModel} deleteEmployee={deleteEmp}/>
  <EmployeeModel isOpen={isOpen} closeModel={closeModel} currentEmployee={currentEmployee} addOrUpdateEmp={addOrUpdateEmp}/>
    </div>
  )
}

export default App
