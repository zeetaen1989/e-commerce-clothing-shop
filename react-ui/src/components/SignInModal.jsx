import * as React from 'react';
import { Box, Button, Modal } from "@mui/material";
import styled from 'styled-components';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
};

const Wrapper = styled.div`

`;

const Title = styled.h1`

`;

const Form = styled.form`

`;

const Input = styled.input`

`;

const Agreement = styled.p`

`;

const SignInModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <React.Fragment>
            <Button onClick={handleOpen} style={{textTransform: "uppercase", color: "black"}}>Sign In</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Wrapper>
                        <Title style={{textTransform: "uppercase"}} >Sign In</Title>
                        <Form>
                            <Input placeholder='First Name' />
                            <Input placeholder='Last Name' />
                            <Input placeholder='Username' />
                            <Input placeholder='E-mail' />
                            <Input placeholder='Password' />
                            <Input placeholder='Confirm Password' />
                            <Agreement>
                                By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy.
                            </Agreement>
                            <Button>Sign Up</Button>
                        </Form>
                    </Wrapper>
                </Box>
            </Modal>
        </React.Fragment>
    )
};

export default SignInModal;

