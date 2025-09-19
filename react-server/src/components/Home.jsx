import React from "react";
import { useState } from "react";
import Modal from "react-modal";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  Modal.setAppElement("#root");
  return (
    <div>
      <div>
        <div className="h-12text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Welcome To Home Page
        </div>
        <p className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-950 to-blue-500 text-center mt-4">
          This is the Potatos Application Page.
        </p>
        <div className="text-center mt-6 justify-center items-center flex flex-col gap-4">
          <button onClick={openModal}>Gojo Satoru "Click"</button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-20 outline-none cursor-alias"
            overlayClassName="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center"
          >
            <div className="flex flex-col items-center  ">
              <h2 className="text-2xl font-bold mb-4 ">Gojo Satoru</h2>
              <img
                src="https://media.tenor.com/b67iXf4kQZkAAAAe/gojo-kitkat-gojo.png"
                width={200}
                height={200}
                alt="Example"
                className="mb-4"
              />
              <div className="mb-4 text-center text-lg text-gray-700 leading-relaxed space-y-2 bg-gray-100 rounded-lg p-4 shadow">
                <span className="font-bold text-violet-700">โกะโจ ซาโตรุ (ญี่ปุ่น: 五条 悟; โรมาจิ: Gojō Satoru)</span><br />
                <span>เป็นตัวละครจากมังงะเรื่อง <span className="font-semibold text-blue-700">มหาเวทย์ผนึกมาร</span> ผลงานของเกเงะ อากูตามิ</span><br />
                <span>ปรากฏตัวครั้งแรกในซีรีส์มังงะเรื่องสั้นของอากูตามิเรื่อง <span className="font-semibold">โรงเรียนเฉพาะทางไสยศาสตร์นครโตเกียว</span></span><br />
                <span>ในฐานะอาจารย์ของโรงเรียนไสยเวทผู้ฝึกสอนเด็กหนุ่มต้องสาป อคคทสึ ยูตะ</span><br />
                <span>ซีรีส์เรื่องนี้ได้กลายเป็นภาคย้อนอดีตของมหาเวทย์ผนึกมารในชื่อเรื่องว่า <span className="font-semibold text-blue-700">มหาเวทย์ผนึกมาร 0: โรงเรียนเฉพาะทางไสยศาสตร์นครโตเกียว</span></span><br />

              </div>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Home;
