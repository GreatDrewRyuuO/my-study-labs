import React from 'react'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-500 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">ขออภัย ไม่พบหน้าที่คุณร้องขอ</p>
      <a href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">กลับหน้าหลัก</a>
    </div>
  )
}

export default NotFound