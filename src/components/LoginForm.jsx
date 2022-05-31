import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function handleValues() {
        let user = {
            email,
            password
        }
        console.log(user);
    }

    return (
        <Box display={"flex"} flexDirection={'column'} alignItems={'center'} justifyContent={"center"} height={"70vh"} >
            <Typography variant="h3" component="h2">
                Login form
            </Typography>
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "30%", margin: "15px" }} id="outlined-basic" label="Email" variant="outlined" />
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "30%", margin: "15px" }} id="outlined-basic" label="Password" variant="outlined" />
            <Button onClick={handleValues} variant="contained" href="#contained-buttons" style={{ width: "30%", margin: "15px" }}>
                Login
            </Button>
        </Box>
    );
};

export default LoginForm;