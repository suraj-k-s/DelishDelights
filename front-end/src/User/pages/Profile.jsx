// import { Avatar, Button, Card, CardActions, CardContent, Paper, Typography } from '@mui/material'
// import { Box } from '@mui/system';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const Profile = () => {

//   const [user, setUser] = useState([]);

//   const fetchUser = () => {
//     axios.get("http://localhost:4000/User/" + sessionStorage.getItem("user_id")).then((response) => {
//       var data = response.data.User;
//       setUser(data[0]);
//     });
//   }

//   useEffect(() => {
//     fetchUser()
//   }, [])

//   return (
//     <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "70%" }}>
//       <Card sx={{ width: "70%", height: "100%" }}>
//         <CardContent style={{}}>
//           <div style={{ display: "flex", justifyContent: "center" }}>
//             <Avatar sx={{ width: "100px", height: "100px" }} alt="" src={user.user_photo} />
//           </div>
//           <div >
//             <Typography style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }} variant="h5" component="div">
//               {user.user_name}
//             </Typography>
//             <Typography sx={{ mb: 1.5 }} >
//               {user.user_contact}
//             </Typography>
//             <Typography sx={{ mb: 1.5 }} >
//             </Typography>
//             <Typography sx={{ mb: 1.5 }} >
//               {user.user_email}

//             </Typography>
//           </div>

//         </CardContent>
//         <CardActions>
//           <Button size="small" color='error'>Log out</Button>
//         </CardActions>
//       </Card>
//     </div>
//   )
// }

// export default Profile



import { Avatar, Button, Card, CardActions, CardContent, IconButton, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { IconBase } from 'react-icons/lib';

const Profile = () => {

  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [file, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const fetchUser = () => {
    axios.get("http://localhost:4000/User/" + sessionStorage.getItem("user_id")).then((response) => {
      setUser(response.data.User[0]);
    });
  }

  const updateUser = () => {

    const formData = new FormData();
    formData.append('user_photo', file);
    formData.append('user_name', name);
    formData.append('user_contact', contact);
    formData.append('user_email', email);
    axios.post("http://localhost:4000/UserUpdate/" + sessionStorage.getItem("user_id"), formData).then((response) => {
      console.log(formData);
      // setUser(response.data.User[0]);
      // setEditMode(false);
    });
  }

  // const uploadPhoto = (event) => {
  //   const file = event.target.files[0];
  //   const formData = new FormData();
  //   formData.append('user_photo', file);
  //   axios.post("http://localhost:4000/User/" + user.id + "/upload_photo", formData).then((response) => {
  //     setUser(response.data.User[0]);
  //   });
  // }



  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "70%" }}>
      <Card sx={{ width: "70%", height: "85%" }}>
        <CardContent>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
            <Avatar sx={{ width: "100px", height: "100px" }} alt="" src={user.user_photo} />
            <div>
            </div>
          </div>
          {editMode ? (
            <div style={{ display: "grid", justifyContent: "center", gap: "10px" }}>
              <div style={{ display: "grid", justifyContent: "center" }} >
                <IconButton aria-label="upload picture" component="label" sx={{ width: "5px", height: "5px" }}>
                  <input hidden accept="image/*" multiple type="file" onChange={(event) => setFiles(event.target.value)} />
                  <DriveFileRenameOutlineIcon />
                </IconButton>
              </div>
              <TextField type="text" defaultValue={user.user_name} onChange={(event) => setName(event.target.value)} />
              <TextField type="text" defaultValue={user.user_contact} onChange={(event) => setContact(event.target.value)} />
              <TextField type="text" defaultValue={user.user_email} onChange={(event) => setEmail(event.target.value)} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button onClick={updateUser}>Save</Button>
                <Button onClick={() => setEditMode(false)}>Cancel</Button>
              </div>
            </div>
          ) : (
            <div style={{ display: "grid", justifyContent: "center" }}>
              <Typography style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }} variant="h5" component="div" >
                {user.user_name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" >
                contact - {user.user_contact}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                email - {user.user_email}
              </Typography>
              <Button onClick={() => setEditMode(true)}>Edit</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Profile
