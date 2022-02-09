import { useState } from "react";
import axios from 'axios';
;

function CreateUser() {


  const initialValue = {
    name: '',
    lastname: '',
    mail: '',
    user: '',
    birthday: '0'
  }

  const [user, setUsuario] = useState(initialValue)

  const dataCapture = (e) => {
    const { name, value } = e.target
    setUsuario({ ...user, [name]: value })
  }

  const dataSave = async (e) => {
    e.preventDefault();

    //PETICION POST
    const newUser = {
      name: user.name,
      lastname: user.lastname,
      mail: user.mail,
      user: user.user,
      birthday: user.birthday
    }

    await axios.post('http://localhost:3007/api/user', newUser)


    setUsuario ({...initialValue})

  }

  return (
    <div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Crear un nuevo usuario</h3>
              <p className="mt-1 text-sm text-gray-600">Crea un usuario para que todos te conozcan</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={dataSave}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-100 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">First name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your first name here"
                        required
                        value={user.name}
                        onChange={dataCapture}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-1000 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">Last name</label>
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Your last name here"
                        required
                        value={user.lastname}
                        onChange={dataCapture}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-15 sm:col-span-4">
                      <label className="block text-sm font-medium text-gray-700">Email address</label>
                      <input
                        type="text"
                        name="mail"
                        placeholder="please insert your email"
                        required
                        value={user.mail}
                        onChange={dataCapture}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-15 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">User</label>
                      <input
                        type="text"
                        name="user"
                        placeholder="insert your username"
                        required
                        value={user.user}
                        onChange={dataCapture}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-15 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">Birthday</label>
                      <input
                        type="number"
                        name="birthday"
                        required
                        value={user.birthday}
                        onChange={dataCapture}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CreateUser;
