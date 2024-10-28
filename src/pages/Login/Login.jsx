import { FaLongArrowAltRight } from "react-icons/fa"
import './login.css'

const Login = () => {
  return (
    <div className="border h-full flex justify-end p-32 items-center">
      <div className="flex flex-col justify-between items-center gap-6 shadow">
        {/* form */}
        <div className="bg-white p-6 rounded-xl flex flex-col justify-between items-center min-h-[360px] min-w-[300px]">
          <span className="text-4xl font-bold text-appBlue">Đăng nhập</span>
          <div className="flex flex-col items-start w-full gap-3">
            <span className="text-appBlue text-lg">Mã số sinh viên</span>
            <input type="text" placeholder="123456" className="w-full border p-4 outline-none rounded-xl shadow-lg focus:border-blue-300 text-appSecondBlue"/>
          </div>
          <div className="flex flex-col items-start w-full gap-3">
            <span className="text-appBlue text-lg">Mật khẩu</span>
            <input type="passwword" placeholder="********" className="w-full border p-4 outline-none rounded-xl shadow-lg focus:border-blue-300 text-appSecondBlue"/>
          </div>
          <div className="w-full flex justify-start items-center gap-3">
            <input type="checkbox" name="" id="login_checkbox" className="custom_checkbox"/>
            <label htmlFor="login_checkbox" className="text-gray-500">
              Lưu đăng nhập trên thiết bị này
            </label>
          </div>
          <div>
            <button className="border border-appSecondBlue p-2 px-10 text-white rounded-lg bg-appSecondBlue hover:bg-appBlue transition-all">
              <FaLongArrowAltRight className="text-2xl"/>
            </button>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="underline text-appSecondBlue">Quên mật khẩu</span>
            <span className="underline text-appSecondBlue">Đăng kí tài khoản</span>
          </div>
        </div>
        {/* Other Login Method */}
        <div className="bg-appBlue rounded-xl p-4 w-full text-white flex justify-center items-center font-bold text-lg shadow cursor-pointer hover:text-xl transition-all">
          Đăng nhập bằng UEH Student
        </div>
      </div>
    </div>
  )
}

export default Login
