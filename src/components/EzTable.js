import React from 'react';
import MaterialTable from "material-table";


// var columns = [
//     {title: "First Name", field: "first name" },
//     {title: "Last Name", field: "last name" },
//     {title: "Phone", field: "phone", type: "numeric" },
//     {title: "Email", field: "email" },
//     {title: "Location", field: "location" },
// ]


export default function EzTable() {

const [state, setState] = React.useState({
    columns: [
        {title: "First Name", field: "first_name" },
        {title: "Last Name", field: "last_name" },
        {title: "D.O.B", field: "dob" },
        {title: "Phone", field: "phone", type: "numeric" },
        {title: "Email", field: "email" },
        {title: "Location", field: "location" },
    ],


    data: [
    {
        first_name: "Madison",
        last_name: "Rodriquez",
        location: "Oklahoma",
        email: "madison.rodriquez@example.com",
        dob:  "1954-06-11",
        phone: "(454)-573-1838",
    },
    {
        first_name: "Rita",
        last_name: "Williamson",
        location: "Pennsylvania",
        email: "rita.williamson@example.com",
        dob:"1998-02-24",
        phone: "(879)-746-5479",
    },
    {
        first_name: "Brad",
        last_name: "Lowe",
        location: "Minnesota",
        email: "brad.lowe@example.com",
        dob: "1945-09-12",
        phone: "(587)-129-2783",
    },
    {
        first_name: "Crystal",
        last_name: "Graham",
        location: "Hawaii",
        email: "crystal.graham@example.com",
        dob: "1964-03-10",
        phone: "(587)-129-2783",
    },
    {
        first_name: "Darryl",
        last_name: "Hudson",
        location: "New Mexico",
        email: "darryl.hudson@example.com",
        dob: "1984-01-24",
        phone: "(684)-055-3040",
    },
    {
        first_name: "Lance",
        last_name: "Dunn",
        location: "Oklahoma City",
        email: "lance.dunn@example.com",
        dob:"1996-02-06",
        phone: "(679)-692-3693",
    },
    {
        first_name: "Christina",
        last_name: "Cole",
        location: "New York",
        email: "christina.cole@example.com",
        dob: "1996-12-21",
        phone: "(422)-011-7430",
    },
    {
        first_name: "Eric",
        last_name: "Wright",
        location: "Colorado",
        email: "eric.wright@example.com",
        dob: "1953-02-02",
        phone: "(398)-749-6758",
    },
    {
        first_name: "Jessie",
        last_name: "Perez",
        location: "Idaho",
        email: "jessie.perez@example.com",
        dob: "1946-08-01",
        phone: "(917)-089-7625",
    },
    {
        first_name: "Harper",
        last_name: "Hale",
        location: "New Jersey",
        email: "harper.hale@example.com",
        dob: "1989-12-27",
        phone: "(669)-838-7978",
    },
    {
        first_name: "Cassandra",
        last_name: "Ortiz",
        location: "Hawaii",
        email: "cassandra.ortiz@example.com",
        dob: "1991-09-23",
        phone: "(891)-891-5656",
    },
   
]

})


// const [iserror, setIserror]= useState(false);

// const [errorMessages, setErrorMessages]= useState([]);

// useEffect(() => {
//     api.get("/?results=200&nat=us")
//     .then(res =>{
//         setData(res.data.results)
//     })
//     .catch(error => {
//         console.log("Error");
//     })
// }, []);


    return (
        <MaterialTable
        title="Employee Database"
        columns={state.columns}
        data={state.data}
        editable={{
            onRowUpdate: (newData, oldData) => 
                new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                        if(oldData){
                            setState(prevState => {
                                const data = [...prevState.data];
                                data[data.indexOf(oldData)]= newData;
                                return { ...prevState, data};
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
                            return { ...prevState, data};
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
                            return { ...prevState, data};
                        });
                    }, 600);
                }),
        }}
        />   
    );
}

