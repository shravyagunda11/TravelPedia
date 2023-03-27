//user cloums flies 
export const userColumns = [
  { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'username',
      headerName: 'User Name',
      width: 160,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 160,
      editable: true,
    },
    
    {
      field: 'phone',
      headerName: 'Phone',
      width: 120,
      editable: true,
    },
    {
      field: 'city',
      headerName: 'City',
      width: 100,
      editable: true,
    },
    {
      field: 'country',
      headerName: 'Country',
      width: 120,
      editable: true,
    }
    
  ];

//flight cloums 
  export const flightColumns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Airlines",
      width: 150,
    },
    {
      field: "from",
      headerName: "From",
      width: 100,
    },
    {
      field: "to",
      headerName: "To",
      width: 100,
    },
    {
      field: "numberofStops",
      headerName: "Stops",
      width: 100,
    },
    {
      field: "timeDuration",
      headerName: "Time Duration",
      width: 100,
    },
    {
      field: "cheapestPrice",
      headerName: "Price",
      width: 100,
    },
  ];
  //hotel columns
  export const hotelColumns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Hotel Name",
      width: 150,
    },
    {
      field: "city",
      headerName: "City",
      width: 100,
    },
    {
      field: "address",
      headerName: "Address",
      width: 230,
    },
    {
      field: "cheapestPrice",
      headerName: "Cheapest Price",
      width: 120,
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 100,
    },
  ];
  //room columns
  export const roomColumns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "title",
      headerName: "Title",
      width: 150,
    },
    {
      field: "description",
      headerName: "Description",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "maxpeople",
      headerName: "Max People",
      width: 130,
    },
  ];