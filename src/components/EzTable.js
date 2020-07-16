import React, { useEffect, useState } from 'react';
import MaterialTable from "material-table";

export default function EzTable() {

    const [finalUsers, setFinalUsers] = useState([])

    const [state, setState] = useState({
        columns: [
            { title: "First Name", field: "first_name" },
            { title: "Last Name", field: "last_name" },
            { title: "Phone", field: "phone", type: "numeric" },
            { title: "Email", field: "email" },
        ],


        data: finalUsers

    })

    useEffect(() => {
        async function apiReq() {
            const response = await fetch("https://randomuser.me/api/?results=200&nat=us");
            const data = await response.json();

            format(data.results);
        }

        function format(arr) {
            console.log("users", arr)
            const results = arr.map(user => ({
                    email: user.email,
                    phone: user.cell,
                    first_name: user.name.first,
                    last_name: user.name.last,
                }
            ))
            setFinalUsers(results);
        }
        apiReq();

    }, []);

    return (
        <MaterialTable
            title="Employee Database"
            columns={state.columns}
            data={finalUsers}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData, 1))
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}

