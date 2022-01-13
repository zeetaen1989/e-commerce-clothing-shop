import * as React from 'react';
import { Box, Button, Modal } from "@mui/material";
import styled from 'styled-components';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '1px solid grey',
    borderRadius: '5px',
    boxShadow: '2px 2px 5px 5px rgba(0,0,0,0.75)',
    p: '1rem 1.5rem',
};

const Wrapper = styled.div`

`;

const Title = styled.h1`

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Label = styled.label`
    font-size: 1rem;
    font-weight: 500;
`;

const Input = styled.input`
    font-size: 1rem;
    padding: 0.5rem;
`;

const Agreement = styled.p`
    display: flex;
`;

const SignInModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <React.Fragment>
            <Button
                onClick={handleOpen}
                style={{
                    textTransform: "uppercase",
                    color: "black",
                    fontFamily: "inherit",
                    fontSize: "1rem",
                    border: "1px solid black",
                    padding: "0 1rem",
                }}
            >
                Sign In
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ transition: "all 0.3s ease-in-out" }}
            >
                <Box sx={style}>
                    <Wrapper>
                        <Title style={{ textTransform: "uppercase" }}>
                            Sign Up
                        </Title>
                        <Form>
                            <Label>Username</Label>
                            <Input placeholder="Username" type="text" />
                            <Label>Email</Label>
                            <Input placeholder="Email" type="email" />
                            <Label>Password</Label>
                            <Input placeholder="Password" type="password" />
                            <Label>Confirm Password</Label>
                            <Input placeholder="Confirm Password" type="password" />
                            <Agreement>
                                <Checkbox style={{ padding: "0", marginRight: "0.2rem",  }} />
                                By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy.
                            </Agreement>
                            <Button
                                style={{
                                    textTransform: "uppercase",
                                    color: "black",
                                    fontFamily: "inherit",
                                    fontSize: "1rem",
                                    border: "1px solid black",
                                    padding: "0 1rem",
                                }}
                            >
                                Sign Up
                            </Button>
                        </Form>
                    </Wrapper>
                </Box>
            </Modal>
        </React.Fragment>
    );
};

export default SignInModal;

