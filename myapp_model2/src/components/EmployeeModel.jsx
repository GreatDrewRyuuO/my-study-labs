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
    //กำหนดให้ เป็น containner เพื่อคุม class ต่างๆภายในได้ง่ายขึ้นพร้อมจัดกึ่งกลาง item ทั้งแนวตั้ง-นอน ความสูง ขั้นต่ำเป็น 100% ถ้าไม่มี content จะเป็น 0%
    <Modal isOpen={isOpen} onRequestClose={closeModel} className="flex items-center justify-center min-h-screen">
        {/* พื้นหลังสีขาว ความกว้าง ขยายตาม conent*/}
      <div className="bg-white p-8 w-full max-w-md mx-auto">
        {/* ตัวอักษรขนาด 16px ตัวหนา อยู่ตรงกลาง margin-bot = 6 มีสีม่วง*/}
        <h2 className="text-2xl font-bold text-center mb-6 text-violet-700">
          {currentEmployee ? "แก้ไขข้อมูลพนักงาน" : "เพิ่มข้อมูลพนักงาน"}
        </h2>
        {/* กำหนดให้ เป็น containner เพื่อคุม class พร้อมมีระยะห่างแต่ละ class ที่ 16px*/}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            {/* margin-bot = 1 ตัวบาง*/}
            <label className="mb-1 font-semibold" htmlFor="name">ชื่อ</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              //ความกว้าง 100% ของ content มี border สีเทา พร้อมโค้ง มี padding แก้น x =3 แก้น y =2
              className="w-full border border-gray-300 rounded px-3 py-2 "
            />
          </div>
          <div>
            {/* margin-bot = 1 ตัวบาง*/}
            <label className="mb-1 font-semibold" htmlFor="age">อายุ</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              //ความกว้าง 100% ของ content มี border สีเทา พร้อมโค้ง มี padding แก้น x =3 แก้น y =2
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            {/* margin-bot = 1 ตัวบาง*/}
            <label className="mb-1 font-semibold" htmlFor="postiion">ตำแหน่ง</label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={(e) => setPostion(e.target.value)}
              required
              //ความกว้าง 100% ของ content มี border สีเทา พร้อมโค้ง มี padding แก้น x =3 แก้น y =2
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          {/* กำหนดให้ เป็น containner เพื่อคุม class พร้อมมีระยะห่างแต่ละ class ที่ 12px ที margin-top = 4 เนื้อหาอยู่กึ่งกลาง */}
          <div className="flex gap-3 mt-4 justify-center">
            <button
              type="submit"
              //พื้นหลังน้ำเงิน ตัวอัดกษรขาว มี padding แก้น x =5 แก้น y =2
              className="bg-blue-500 text-white px-5 py-2 "
            >
              {currentEmployee ? 'อัปเดตข้อมูล' : 'บันทึกข้อมูล'}
            </button>
            <button
              type="button"
              onClick={closeModel}
              //พื้นหลังเทา ตัวอักษรสีเทาเข้ม มี padding แก้น x =5 แก้น y =2
              className="bg-gray-300 text-gray-800 px-5 py-2"
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
