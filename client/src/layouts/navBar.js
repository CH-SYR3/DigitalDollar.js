import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    toggleNavbar() {
        this.setState({
        collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
        <div>
            <Navbar style={{background: '#948E99',  
                            background: '-webkit-linear-gradient(to right, #2E1437, #948E99)',
                            background: 'linear-gradient(to right, #2E1437, #948E99)'}} dark>
            <NavbarToggler color="white" onClick={this.toggleNavbar} className="mr-2" />
        
            <Button style={{color: 'white'}} href="/" className="mrauto">DigitalDollar</Button>
            <Button style={{color: 'white', marginLeft: '985px'}} onClick={this.handleClickOpen}  className="mr-auto">Enter Code</Button>
    
            <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
            >
            <DialogTitle id="form-dialog-title">Enter Code</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Thank you for participating in  the DigitalDollar global run! By entering this code we will 
                    add your location to our map,  please enter your magnificint code here. Thank you for your 
                    participation.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="Code"
                    label="Enter Code"
                    type="Code"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={this.handleClose} color="primary">
                    Subscribe
                </Button>
            </DialogActions>
            </Dialog>

            <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                <NavItem>
                    <NavLink color="white" href="/">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink color="white" href="/components">GitHub</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink color="white" href="/">Buy Me A Coffee?</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
            </div>
        );
    }
    }