import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Users = () => {
    const { userProfile } = useContext(AuthContext)
    console.log(userProfile)
    const users = useLoaderData()
    const [user, setUser] = useState(users)

    const handleDelete = _id => {
        console.log(_id, 'deleted')
        fetch(`https://coffee-store-server-kxuqsdl2n-mahedes-projects-fb0c4014.vercel.app/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remaining = user.filter(us => us._id !== _id)
                    setUser(remaining)
                }
            })
    }

    const handleEdit = id => {
        console.log(id, 'edit')
    }
    return (
        <div className="w-full">
            <div className="overflow-x-auto max-w-6xl mx-auto my-32">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>SignUp Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((us, index) => <tr key={us._id}>
                                <th>{index + 1}</th>
                                <td>{us.email}</td>
                                <td>{us.createdAt}</td>
                                <button
                                    onClick={() => handleDelete(us._id)}
                                    className="btn btn-danger my-1 px-4 text-white  bg-red-500">X</button>

                                <button
                                    onClick={() => handleEdit(us._id)}
                                    className="btn btn-primary my-1 ms-2 px-2 text-white">Edit</button>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;