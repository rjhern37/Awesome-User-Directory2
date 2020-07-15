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
        {title: "First Name", field: "first name" },
        {title: "Last Name", field: "last name" },
        {title: "Phone", field: "phone", type: "numeric" },
        {title: "Email", field: "email" },
        {title: "Location", field: "location" },
    ],


    data: [
    {
        "gender": "female",
        "name": {
            "title": "Miss",
            "first": "Madison",
            "last": "Rodriquez"
        },
        "location": {
            "street": {
                "number": 9136,
                "name": "Thornridge Cir"
            },
            "city": "West Valley City",
            "state": "Oklahoma",
            "country": "United States",
            "postcode": 15856,
            "coordinates": {
                "latitude": "-64.0394",
                "longitude": "160.6405"
            },
            "timezone": {
                "offset": "-8:00",
                "description": "Pacific Time (US & Canada)"
            }
        },
        "email": "madison.rodriquez@example.com",
        "login": {
            "uuid": "ac02edfb-1836-43a0-afec-6e2947869b62",
            "username": "silvergorilla917",
            "password": "target",
            "salt": "HpzpOax9",
            "md5": "39372bedf97ec5497287d3110b6bd73b",
            "sha1": "34c6aeed3d4ecfc8e9c1b799679d018e0b412c2d",
            "sha256": "493e395eeadd6a656ba8ef8e5c44457e587dd8c6eebf5bdbabe06c5b81dbb3c7"
        },
        "dob": {
            "date": "1954-06-11T23:45:58.833Z",
            "age": 66
        },
        "registered": {
            "date": "2012-02-04T00:22:27.273Z",
            "age": 8
        },
        "phone": "(454)-573-1838",
        "cell": "(837)-982-4541",
        "id": {
            "name": "SSN",
            "value": "704-38-1097"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/29.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/29.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/29.jpg"
        },
        "nat": "US"
    },
    {
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Rita",
            "last": "Williamson"
        },
        "location": {
            "street": {
                "number": 1012,
                "name": "Mcclellan Rd"
            },
            "city": "The Colony",
            "state": "Pennsylvania",
            "country": "United States",
            "postcode": 50304,
            "coordinates": {
                "latitude": "59.7627",
                "longitude": "-58.6707"
            },
            "timezone": {
                "offset": "-7:00",
                "description": "Mountain Time (US & Canada)"
            }
        },
        "email": "rita.williamson@example.com",
        "login": {
            "uuid": "de5cfc37-972b-4066-a21f-cbacfa217ec7",
            "username": "goldenbird654",
            "password": "modelsne",
            "salt": "CC7RtsJX",
            "md5": "8748588b122357cafe8f6167a3e83f90",
            "sha1": "ea18907c9f18dc60cf637d820306fb2290748f29",
            "sha256": "a789835ad72a37334ea412df5750614151f540b1f16ddbec66d138de7e41172f"
        },
        "dob": {
            "date": "1998-02-24T18:29:28.232Z",
            "age": 22
        },
        "registered": {
            "date": "2007-03-21T14:15:54.941Z",
            "age": 13
        },
        "phone": "(879)-746-5479",
        "cell": "(418)-566-4728",
        "id": {
            "name": "SSN",
            "value": "552-88-3744"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/86.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/86.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/86.jpg"
        },
        "nat": "US"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Brad",
            "last": "Lowe"
        },
        "location": {
            "street": {
                "number": 2226,
                "name": "Wheeler Ridge Dr"
            },
            "city": "Irving",
            "state": "Minnesota",
            "country": "United States",
            "postcode": 58558,
            "coordinates": {
                "latitude": "-6.9058",
                "longitude": "-15.8655"
            },
            "timezone": {
                "offset": "+5:30",
                "description": "Bombay, Calcutta, Madras, New Delhi"
            }
        },
        "email": "brad.lowe@example.com",
        "login": {
            "uuid": "fb549c95-09f4-4ecb-bb7a-86bf61d8a97b",
            "username": "happybutterfly607",
            "password": "luke",
            "salt": "LAw1yB9C",
            "md5": "7d732dfdba9005424c9b0c10a7a63866",
            "sha1": "712da445856a2f8d41072188128217e88ddf3eed",
            "sha256": "7cd5976bdeaf0f7222c60f387daef03706e9b75a31cc2028b96f5f71d0225182"
        },
        "dob": {
            "date": "1945-09-12T18:09:20.568Z",
            "age": 75
        },
        "registered": {
            "date": "2005-11-04T02:40:46.304Z",
            "age": 15
        },
        "phone": "(587)-129-2783",
        "cell": "(992)-092-4699",
        "id": {
            "name": "SSN",
            "value": "666-24-0303"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/34.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/34.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/34.jpg"
        },
        "nat": "US"
    },
    {
        "gender": "female",
        "name": {
            "title": "Miss",
            "first": "Crystal",
            "last": "Graham"
        },
        "location": {
            "street": {
                "number": 6701,
                "name": "Royal Ln"
            },
            "city": "Waxahachie",
            "state": "Hawaii",
            "country": "United States",
            "postcode": 90291,
            "coordinates": {
                "latitude": "-45.0316",
                "longitude": "130.6864"
            },
            "timezone": {
                "offset": "+3:00",
                "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
            }
        },
        "email": "crystal.graham@example.com",
        "login": {
            "uuid": "983dc6b7-6a11-48b3-b778-965d67f78619",
            "username": "redbutterfly717",
            "password": "xxxxx",
            "salt": "6i5pJFei",
            "md5": "33b6d459129383c0bea32d3a9ee84f2f",
            "sha1": "d703bdc2d2e623167a02ea30241a256c9313c941",
            "sha256": "8069cd971887fbcbc5f73cfbfc1efdfadffa03996fc18d376edeb259c3b9b2ba"
        },
        "dob": {
            "date": "1964-03-10T07:31:17.968Z",
            "age": 56
        },
        "registered": {
            "date": "2004-05-05T18:09:32.041Z",
            "age": 16
        },
        "phone": "(760)-103-3270",
        "cell": "(366)-043-5584",
        "id": {
            "name": "SSN",
            "value": "096-65-3378"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/96.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/96.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/96.jpg"
        },
        "nat": "US"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Darryl",
            "last": "Hudson"
        },
        "location": {
            "street": {
                "number": 7882,
                "name": "Homestead Rd"
            },
            "city": "Lafayette",
            "state": "New Mexico",
            "country": "United States",
            "postcode": 75677,
            "coordinates": {
                "latitude": "-86.5109",
                "longitude": "-105.5047"
            },
            "timezone": {
                "offset": "+9:30",
                "description": "Adelaide, Darwin"
            }
        },
        "email": "darryl.hudson@example.com",
        "login": {
            "uuid": "58db23f4-cd5e-4f30-a37a-ff9aa470505e",
            "username": "redbutterfly446",
            "password": "accord",
            "salt": "jFuPtM4Y",
            "md5": "f828505ad68d67e3ae03f892cd5f0127",
            "sha1": "e556e29409385246b12b79b4b1e1aec2d5a3d2f9",
            "sha256": "f0d1ce625d251278d344bcfc02bcbba492c4aa4f2e4be55d1d071ae12138dbe7"
        },
        "dob": {
            "date": "1984-01-24T21:31:06.936Z",
            "age": 36
        },
        "registered": {
            "date": "2014-09-23T19:05:13.842Z",
            "age": 6
        },
        "phone": "(684)-055-3040",
        "cell": "(175)-293-5953",
        "id": {
            "name": "SSN",
            "value": "400-00-4424"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/52.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/52.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/52.jpg"
        },
        "nat": "US"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Lance",
            "last": "Dunn"
        },
        "location": {
            "street": {
                "number": 1906,
                "name": "Valwood Pkwy"
            },
            "city": "Oklahoma City",
            "state": "Alabama",
            "country": "United States",
            "postcode": 53699,
            "coordinates": {
                "latitude": "46.1998",
                "longitude": "-98.8801"
            },
            "timezone": {
                "offset": "-10:00",
                "description": "Hawaii"
            }
        },
        "email": "lance.dunn@example.com",
        "login": {
            "uuid": "508abf3e-e2e4-4981-afa1-a51fbb130654",
            "username": "crazysnake998",
            "password": "mooney",
            "salt": "0DOkfaxC",
            "md5": "81d9cb68410ea69aeff1a741a3e53300",
            "sha1": "6b7f27ab0e6ba3a95b4cd46a08dce4dc9afcdfd5",
            "sha256": "15115565c90d0b00ba02ebee7b97797f3fdf29d624c6b22d357b130cfc4321d7"
        },
        "dob": {
            "date": "1996-02-06T03:43:51.975Z",
            "age": 24
        },
        "registered": {
            "date": "2019-01-15T14:53:33.011Z",
            "age": 1
        },
        "phone": "(679)-692-3693",
        "cell": "(392)-997-0999",
        "id": {
            "name": "SSN",
            "value": "146-38-0613"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/96.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/96.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/96.jpg"
        },
        "nat": "US"
    },
    {
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Christina",
            "last": "Cole"
        },
        "location": {
            "street": {
                "number": 2025,
                "name": "Robinson Rd"
            },
            "city": "Norwalk",
            "state": "New York",
            "country": "United States",
            "postcode": 57966,
            "coordinates": {
                "latitude": "53.0042",
                "longitude": "-147.3896"
            },
            "timezone": {
                "offset": "+10:00",
                "description": "Eastern Australia, Guam, Vladivostok"
            }
        },
        "email": "christina.cole@example.com",
        "login": {
            "uuid": "5aa07689-e60f-49a9-a5ce-a036ec679b28",
            "username": "silverleopard175",
            "password": "styles",
            "salt": "DZiVaCdZ",
            "md5": "b4eaff59a139c9d7ed994df257f2c3e4",
            "sha1": "fde1429a0b2fbbec6e7f2a524219f72f15e22afa",
            "sha256": "52942f2774640598fa916bb5b34262ee0865427d88ed29f31a5230c96e74934c"
        },
        "dob": {
            "date": "1996-12-21T02:27:05.515Z",
            "age": 24
        },
        "registered": {
            "date": "2004-12-02T18:29:50.273Z",
            "age": 16
        },
        "phone": "(422)-011-7430",
        "cell": "(141)-586-9707",
        "id": {
            "name": "SSN",
            "value": "902-04-8042"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/35.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/35.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/35.jpg"
        },
        "nat": "US"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Eric",
            "last": "Wright"
        },
        "location": {
            "street": {
                "number": 7466,
                "name": "First Street"
            },
            "city": "Beaumont",
            "state": "Colorado",
            "country": "United States",
            "postcode": 44925,
            "coordinates": {
                "latitude": "-30.3269",
                "longitude": "61.0508"
            },
            "timezone": {
                "offset": "+4:30",
                "description": "Kabul"
            }
        },
        "email": "eric.wright@example.com",
        "login": {
            "uuid": "59ec1a16-bb8a-4d61-8860-612b83f48f95",
            "username": "tinyzebra780",
            "password": "simone",
            "salt": "Jwc8Me3j",
            "md5": "6c1cad538dcb647257a0ca3140b721c8",
            "sha1": "57a6a438261c6953a0a8fb63391d85a1b50dc073",
            "sha256": "e02285d36052ae93ddb7b1310aeef3727ee2810e1616a7c6dc53c111ee621f35"
        },
        "dob": {
            "date": "1953-02-02T01:48:32.850Z",
            "age": 67
        },
        "registered": {
            "date": "2013-09-21T10:54:26.283Z",
            "age": 7
        },
        "phone": "(398)-749-6758",
        "cell": "(185)-993-1702",
        "id": {
            "name": "SSN",
            "value": "668-35-5443"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/4.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/4.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/4.jpg"
        },
        "nat": "US"
    },
    {
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Jessie",
            "last": "Perez"
        },
        "location": {
            "street": {
                "number": 9307,
                "name": "Wycliff Ave"
            },
            "city": "Nashville",
            "state": "Idaho",
            "country": "United States",
            "postcode": 42950,
            "coordinates": {
                "latitude": "-4.7654",
                "longitude": "-144.0240"
            },
            "timezone": {
                "offset": "+4:00",
                "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
            }
        },
        "email": "jessie.perez@example.com",
        "login": {
            "uuid": "00076379-2931-43da-87f7-a2106794dfff",
            "username": "whitedog667",
            "password": "elizabet",
            "salt": "W13JbhXp",
            "md5": "cf8ea7ff6fe828464a0f42e97abc18ed",
            "sha1": "a22e48f14e0e4c3049cbb6eb6a20bd671662f643",
            "sha256": "9365a7534293929050c84de081cd159e362d8c9c961969bc627c73ff9e4b0c22"
        },
        "dob": {
            "date": "1946-08-01T03:03:14.503Z",
            "age": 74
        },
        "registered": {
            "date": "2007-07-03T01:47:07.515Z",
            "age": 13
        },
        "phone": "(917)-089-7625",
        "cell": "(155)-913-4414",
        "id": {
            "name": "SSN",
            "value": "695-60-6698"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/86.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/86.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/86.jpg"
        },
        "nat": "US"
    },
    {
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Harper",
            "last": "Hale"
        },
        "location": {
            "street": {
                "number": 3431,
                "name": "Pockrus Page Rd"
            },
            "city": "Memphis",
            "state": "New Jersey",
            "country": "United States",
            "postcode": 20896,
            "coordinates": {
                "latitude": "83.3454",
                "longitude": "43.1495"
            },
            "timezone": {
                "offset": "+11:00",
                "description": "Magadan, Solomon Islands, New Caledonia"
            }
        },
        "email": "harper.hale@example.com",
        "login": {
            "uuid": "ce9f359e-65e3-4eeb-8eff-3795c1a15ac3",
            "username": "happywolf774",
            "password": "seabee",
            "salt": "Jf23wiCy",
            "md5": "a3c1c85218d1a1e53cac0d6532f293a9",
            "sha1": "bca923187ebe9c3c8eb759ac8fcdd53351011b6a",
            "sha256": "5e8dfa053dfefb5a5bdfb955a76ef6445bfac0ef322919ea19388459d9539bd3"
        },
        "dob": {
            "date": "1989-12-27T19:43:00.564Z",
            "age": 31
        },
        "registered": {
            "date": "2015-10-25T17:55:32.481Z",
            "age": 5
        },
        "phone": "(669)-838-7978",
        "cell": "(876)-077-3570",
        "id": {
            "name": "SSN",
            "value": "153-68-5210"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/1.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/1.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/1.jpg"
        },
        "nat": "US"
    },
    {
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "Cassandra",
            "last": "Ortiz"
        },
        "location": {
            "street": {
                "number": 4000,
                "name": "Forest Ln"
            },
            "city": "Rockford",
            "state": "Hawaii",
            "country": "United States",
            "postcode": 70234,
            "coordinates": {
                "latitude": "-62.0211",
                "longitude": "53.9980"
            },
            "timezone": {
                "offset": "-9:00",
                "description": "Alaska"
            }
        },
        "email": "cassandra.ortiz@example.com",
        "login": {
            "uuid": "f3b9a87d-2c07-40dd-881f-25734011c650",
            "username": "blueelephant686",
            "password": "222222",
            "salt": "wV8mTTB1",
            "md5": "b568840df6bd6a9961a9a1aabaae62ba",
            "sha1": "a500baf1d94cea7cb94bc73b6863c729c29f3d6c",
            "sha256": "6fc29f99f8f2deaa209e98d429534a6525a80513a1858afc2a04aa913370d5ce"
        },
        "dob": {
            "date": "1991-09-23T17:37:43.674Z",
            "age": 29
        },
        "registered": {
            "date": "2013-10-15T07:12:28.302Z",
            "age": 7
        },
        "phone": "(891)-891-5656",
        "cell": "(826)-929-9750",
        "id": {
            "name": "SSN",
            "value": "911-60-8826"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/73.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/73.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/73.jpg"
        },
        "nat": "US"
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
                            setState(...prevState => {
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
                        setState(...prevState => {
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
                        setState(...prevState => {
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

