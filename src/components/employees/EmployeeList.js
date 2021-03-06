import React, {useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import { getAllEmployees } from "../ApiManager";

export const EmployeeList = () => {
    const [employees, setEmployee] = useState([])
    const [employeeSpecialties, showSpecialty] = useState("")
    const history = useHistory()

    useEffect(
        () => {
            getAllEmployees()
                .then((employeeArray) => {
                        setEmployee(employeeArray)
                    })
        },[]
    )

    useEffect(
        () => {
            const getSpecialty = employees.map(employeeObject => employeeObject.specialty)
            showSpecialty(getSpecialty.join(", "))
        },[employees]
    )

    return (
        <>
        <div>
            <button onClick={() => history.push("/employee/create")}>Hire Employee</button>
        </div>
        <div>
            Specialties: {employeeSpecialties}
        </div>
        {employees.map((employeeObject) => {
            return <p key={`employee--${employeeObject.id}`}><Link to={`/employees/${employeeObject.id}`}>{employeeObject.name}</Link></p>
        })}
        </>
    )
}