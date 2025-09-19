import PropTypes from "prop-types";

function EmoloyeeList({ employees, openModel, deleteEmployee }) {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">รายชื่อพนักงาน</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border bg-violet-700 border-gray-200 rounded-lg overflow-hidden">
          <thead className=" text-white">
            <tr>
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
                <td className="py-2 px-4 flex gap-2 justify-center">
                  <button
                    onClick={() => openModel(employee)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    แก้ไข
                  </button>
                  <button
                    onClick={() => deleteEmployee(employee.id)}
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
