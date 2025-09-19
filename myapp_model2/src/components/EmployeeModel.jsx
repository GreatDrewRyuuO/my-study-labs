import Modal from "react-modal";
import PropTypes from "prop-types";
import { useState , useEffect} from "react";

Modal.setAppElement("#root");

function EmployeeModel({
  isOpen,
  closeModel,
  currentEmployee,
  addOrUpdateEmp,
}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPostion] = useState("");

  useEffect(() => {
    if (currentEmployee) {
      setName(currentEmployee.name);
      setAge(currentEmployee.age);
      setPostion(currentEmployee.position);
    } else {
      setName("");
      setAge("");
      setPostion("");
    }
  }, [currentEmployee]);

  function handleSubmit(event) {
    event.preventDefault();
    const employee = {
      id: currentEmployee ? currentEmployee.id : undefined,
      name,
      age: parseInt(age),
      position,
    };
  addOrUpdateEmp(employee);
  }
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModel} className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg p-8 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6 text-violet-700">
          {currentEmployee ? "แก้ไขข้อมูลพนักงาน" : "เพิ่มข้อมูลพนักงาน"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1 font-semibold" htmlFor="name">ชื่อ</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 "
            />
          </div>
          <div>
            <label className="mb-1 font-semibold" htmlFor="age">อายุ</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="mb-1 font-semibold" htmlFor="postiion">ตำแหน่ง</label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={(e) => setPostion(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="flex gap-3 mt-4 justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-5 py-2 rounded "
            >
              {currentEmployee ? 'อัปเดตข้อมูล' : 'บันทึกข้อมูล'}
            </button>
            <button
              type="button"
              onClick={closeModel}
              className="bg-gray-300 text-gray-800 px-5 py-2 rounded"
            >
              ปิด
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

EmployeeModel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModel: PropTypes.func.isRequired,
  currentEmployee: PropTypes.object,
  addOrUpdateEmp: PropTypes.func.isRequired,
};

export default EmployeeModel;
