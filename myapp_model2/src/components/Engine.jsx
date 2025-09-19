import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function Engine() {
  const [employees, setEmployee] = useState([]);
  const [isOpen, setisOpen] = useState(false);

  const [currentEmployee, setcurrentEmployee] = useState(null);
  const [URL] = useState(
    "http://localhost/6706021411172/myapp_model2/restful/api.php"
  );

  async function fetchApiEmp() {
    try {
      const response = await axios.get(URL);
      setEmployee(response.data);
    } catch (error) {
      console.error("Error fetching employee", error);
    }
  }

  useEffect(() => {
    fetchApiEmp();
  }, []);

  function openModel(employee) {
    setcurrentEmployee(employee);
    setisOpen(true);
  }

  function closeModel() {
    setisOpen(false);
    setcurrentEmployee(null);
  }

  async function addOrUpdateEmp(employee) {
    try {
      if (currentEmployee) {
        await axios.put(URL, employee, {
          headers: { "Content-Type": "application/json" },
        });
      } else {
        await axios.post(URL, employee, {
          headers: { "Content-Type": "application/json" },
        });
      }
      fetchApiEmp();
      closeModel();
    } catch (error) {
      console.error("Error adding/updating employee", error);
    }
  }

  async function deleteEmp(id) {
    try {
        await axios.delete(`${URL}/${id}`);
        fetchApiEmp();
    } catch (error) {
        console.error("Error deleting employee",error)
    }
  }
  return {
    employees,isOpen,currentEmployee,
    openModel,closeModel,addOrUpdateEmp,deleteEmp
  };
}

export default Engine;
