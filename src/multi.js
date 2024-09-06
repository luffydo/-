import { useState } from "react";

export default function Multi() {
    const[person, setPerson] = useState({
        firstName: "shen",
        lastName: "yaqi",
        email: "shenyaqi@163.com",
    })

    const handleChange1 = (e) => {
        setPerson({
            ...person,
            firstName: e.target.value
        })
    }
    const handleChange2 = (e) => {
        setPerson({
            ...person,
            lastName: e.target.value
        })
    }
    const handleChange3 = (e) => {
        setPerson({
            ...person,
            email: e.target.value
        })
    }

    return (
        <>
            <label>
                First Name:
                <input type="text" value={person.firstName} onChange={handleChange1} />
            </label>
            <label>
                Last Name:
                <input type="text" value={person.lastName} onChange={handleChange2} />
            </label>
            <label>
                Email:
                <input type="text" value={person.email} onChange={handleChange3} />
            
            </label>
            <p>
                {person.firstName}{' '}{person.lastName} {' '}({person.email})
            </p>
        </>
    )
}