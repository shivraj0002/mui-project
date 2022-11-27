import { createContext, useState, } from "react";
import { v4 as uuidv4 } from 'uuid';

const RolesContext = createContext({})



export const RolesProvider = ({ children }) => {
    const [showEdit, setShowEdit] = useState(false)

    const [updateObj, setUpdateObj] = useState({})
    const [formdata, setFormdata] = useState({
        TechCareRole: "",
        UserManagement: false,
        ServiceRequest: false,
        RecentAlarms: false,
        Cycles: false,
        Insights: false,
        DeviceData: false,
        TroubleShoot: false,
        Events: false,
        id: ""
    })




    const [arr, setArr] = useState([])
    const [updateAdRole, setUpdateAdRole] = useState(false)
    const [roles, setRoles] = useState([])
    const [adRole, setAdRole] = useState({
        ADRole: "",
        TechCareRole: "",
    })

    let null_role = {
        ADRole: "",
        TechCareRole: "",
    }

    let null_data = {
        TechCareRole: "",
        UserManagement: false,
        ServiceRequest: false,
        RecentAlarms: false,
        Cycles: false,
        Insights: false,
        DeviceData: false,
        TroubleShoot: false,
        Events: false,
        id: ""
    }


    const AddRole = (obj) => {
        console.log(obj);
        obj.id = uuidv4();
        arr.push(obj)
        // setFormdata(null_data)
        setArr(arr)
        setShowEdit(false)

        console.log(arr);
    }

    const editRole = (id) => {



        let index = arr.findIndex((itm) => itm.id === id)


        setUpdateObj(arr[index])
        console.log(index);
        // arr[index] = 
        setArr(arr)


        console.log(arr);
    }
    const deleteRole = (id) => {

        let index = arr.findIndex((itm) => itm.id === id)
        console.log(index, arr);
        setFormdata(null_data)
        arr.splice(index, 1)
        setArr(arr)
        console.log(index, arr);

    }


    const AddAdRole = (obj) => {
        console.log(obj);
        obj.id = uuidv4();
        roles.push(obj)
        console.log(roles);
        setRoles(roles)
        // setShowEdit(false)

        console.log(arr);
    }
    const editAdRole = (id, obj) => {

        setShowEdit(true)
        console.log(obj);

        let index = roles.findIndex((itm) => itm.id === id)

        roles[index] = obj
        setAdRole(roles)
        setAdRole(null_role)
        setShowEdit(false)
        setUpdateAdRole(false)

    }


    const deleteAdRole = (id) => {

        let index = roles.findIndex((itm) => itm.id === id)

        roles.splice(index, 1)
        setArr(roles)

    }




    return (
        <RolesContext.Provider value={{
            showEdit, setShowEdit, formdata, arr,
            null_data, AddRole, editRole, deleteRole, AddAdRole, editAdRole, deleteAdRole, roles, adRole, updateAdRole, setUpdateAdRole, setUpdateObj, updateObj
        }}>
            {children}
        </RolesContext.Provider>
    )
}

export default RolesContext