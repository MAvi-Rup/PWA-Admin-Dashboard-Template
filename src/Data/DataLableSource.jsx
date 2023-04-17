export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 180,
    },
    {
      field: "fatherName",
      headerName: "Father's Name",
      width: 200,
    },
    {
      field: "village",
      headerName: "Village",
      width: 150,
    },
    {
      field: "upjilla",
      headerName: "Upjilla",
      width: 150,
    },
    {
      field: "gilla",
      headerName: "Gilla",
      width: 150,
    },
    {
      field: "nid",
      headerName: "NID",
      width: 180,
    },
    {
      field: "mobileNo",
      headerName: "Mobile No.",
      width: 150,
    },
    {
      field: "location",
      headerName: "Location",
      width: 200,
    },
    {
      field: "plantation",
      headerName: "Plantation",
      width: 180,
    },
    {
      field: "target",
      headerName: "Target",
      width: 150,
    },
    {
      field: "accountNo",
      headerName: "Account No.",
      width: 180,
    },
    {
      field: "bankName",
      headerName: "Bank Name",
      width: 180,
    },
    {
      field: "branch",
      headerName: "Branch",
      width: 150,
    },
    {
      field: "routingNo",
      headerName: "Routing No.",
      width: 180,
    },
    {
      field: "farmerPic",
      headerName: "Farmer Picture",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.farmerPic} alt="farmer" />
          </div>
        );
      },
    },
  ];
  
  export const userRows = [
    {
        id: 1,
        username: "Cersei",
        img: "https://images.pexels.com/photos/7697728/pexels-photo-7697728.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "inactive",
        email: "cersei@gmail.com",
        age: 45,
        name: "Cersei Lannister",
        fatherName: "Tywin Lannister",
        village: "Casterly Rock",
        upjilla: "Casterly Rock Upjilla",
        gilla: "Casterly Rock Gilla",
        nid: "1234567890123456",
        mobileNo: "+880123456789",
        location: "20.5937° N, 78.9629° E",
        plantation: "Mango",
        target: "1000 trees",
        accountNo: "123456789012345",
        bankName: "ABC Bank",
        branch: "Casterly Rock Branch",
        routingNo: "123456789",
        farmerPic: "https://images.pexels.com/photos/6349699/pexels-photo-6349699.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
    {
        id: 2,
        username: "Rabbi",
        img: "https://images.pexels.com/photos/7697728/pexels-photo-7697728.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "inactive",
        email: "cersei@gmail.com",
        age: 45,
        name: "Cersei Lannister",
        fatherName: "Tywin Lannister",
        village: "Casterly Rock",
        upjilla: "Casterly Rock Upjilla",
        gilla: "Casterly Rock Gilla",
        nid: "1234567890123456",
        mobileNo: "+880123456789",
        location: "20.5937° N, 78.9629° E",
        plantation: "Mango",
        target: "1000 trees",
        accountNo: "123456789012345",
        bankName: "ABC Bank",
        branch: "Casterly Rock Branch",
        routingNo: "123456789",
        farmerPic: "https://images.pexels.com/photos/6349699/pexels-photo-6349699.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
    {
        id: 3,
        username: "Rizwan",
        img: "https://images.pexels.com/photos/7697728/pexels-photo-7697728.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "inactive",
        email: "cersei@gmail.com",
        age: 45,
        name: "Cersei Lannister",
        fatherName: "Tywin Lannister",
        village: "Casterly Rock",
        upjilla: "Casterly Rock Upjilla",
        gilla: "Casterly Rock Gilla",
        nid: "1234567890123456",
        mobileNo: "+880123456789",
        location: "20.5937° N, 78.9629° E",
        plantation: "Mango",
        target: "1000 trees",
        accountNo: "123456789012345",
        bankName: "ABC Bank",
        branch: "Casterly Rock Branch",
        routingNo: "123456789",
        farmerPic: "https://images.pexels.com/photos/6349699/pexels-photo-6349699.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
    ]
  