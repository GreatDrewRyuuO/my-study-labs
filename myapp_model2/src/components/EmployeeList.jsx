import PropTypes from "prop-types";

function EmoloyeeList({ employees, openModel, deleteEmployee }) {
  return (
    //ความกว้างของ content 600px จัดกึ่งกลาง มีขอบโค้งค่อนข้างมาก padding = 6
    <div className="w-[600px] mx-auto rounded-lg p-6">
        {/* ตัวหนังสือ 16px ตัวหนา อยู่ตรงกลาง margin-bot = 6 สีขาว */ }
      <h2 className="text-2xl font-bold text-center mb-6 text-white">รายชื่อพนักงาน</h2>
      {/* ซ่อน scorllbar แต่จะแสดงถ้ามีความกว้างของ content มากกว่า 600px */ }
      <div className="overflow-x-auto">
        {/*ความกว้าง ขั้นต่ำเป็น 100% ถ้าไม่มี content จะเป็น 0% มีขอบ พื้นหลังสีม่วง ขาวสีเทา มีโค้งค่อนข้างมาก ซ่อน scorllbar */}
        <table className="min-w-full border bg-violet-700 border-gray-200 rounded-lg overflow-hidden">
          <thead className=" text-white">
            <tr>
                {/* มี padding แก้น x =4 แก้น y =2 */ }
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Age</th>
              <th className="py-2 px-4">Position</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="bg-white">
                <td className="py-2 px-4 text-center">{employee.id}</td>
                <td className="py-2 px-4">{employee.name}</td>
                <td className="py-2 px-4 text-center">{employee.age}</td>
                <td className="py-2 px-4">{employee.position}</td>
                {/* ทำให้เป็น containner พร้อมมีระยะห่างแต่ละ component gap 2 = 8px อยู่กึ่งกลาง มี padding แก้น x =4 แก้น y =2  */ }
                <td className="py-2 px-4 flex gap-2 justify-center">
                  <button
                    onClick={() => openModel(employee)}
                    //พื้นหลังน้ำเงิน ตัวหนังสีสีขาว มี padding แก้น x =3 แก้น y =1 ขอบมีโค้งเล็กน้อย
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    แก้ไข
                  </button>
                  <button
                    onClick={() => deleteEmployee(employee.id)}
                    //พื้นหลังแดง ตัวหนังสีสีขาว มี padding แก้น x =3 แก้น y =1 ขอบมีโค้งเล็กน้อย
                    className="bg-red-500 text-white px-3 py-1 rounded "
                  >
                    ลบ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

EmoloyeeList.propTypes = {
  employees: PropTypes.array.isRequired,
  openModel: PropTypes.func.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};

export default EmoloyeeList;
