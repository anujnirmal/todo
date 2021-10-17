import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { styled } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import { blue } from "@mui/material/colors";
import DeleteIcon from '@mui/icons-material/Delete';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



function AddTask() {
    const [value, setValue] = useState(null);

    //Snack Bar Codes
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

      const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

     // Snack Bar Codes Ends here 
    return ( 
        <div>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={6}>
                    <form className="form-control">
                        <TextField 
                            id="outlined-basic" 
                            margin="normal" 
                            fullWidth  
                            label="Title" 
                            variant="outlined" 
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="outlined-multiline-flexible"
                            label="What you want to do?"
                            multiline
                            minRows={10}
                            maxRows={11}
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            margin="normal"
                            label="Basic example"
                            value={value}
                            onChange={(newValue) => {
                            setValue(newValue);
                            }}
                        renderInput={(params) => <TextField {...params} />}/>
                        </LocalizationProvider>
                       
                        <Button 
                            className="add-task-button"
                            fullWidth
                            onClick={handleClick}
                            variant="contained" 
                            disableElevation>Add Task</Button>

                        <Snackbar 
                            open={open} 
                            autoHideDuration={5000} 
                            onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Task Added Successfully
                            </Alert>
                        </Snackbar>

                    </form>         
                </Grid>
                <Grid item xs={1}>
                    <div className="middle">
                        <div className="verticle-line"></div>
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <div className="scroll">
                        <div className="list-holder">
                            <Accordion>
                                
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                <Typography>Finish Homework</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem He ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                    <Button
                                        className="deleteButton"
                                        disableElevation
                                        variant="contained" 
                                        startIcon={<DeleteIcon /> 
                                        }>Delete</Button>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </Grid>
            </Grid>
            
        </div>
        
    )
}

export default AddTask;
