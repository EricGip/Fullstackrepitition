import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import styles from "./createRecipe.module.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function createRecipe() {
    return (
        <div>
            <Button variant="contained"> Save  </Button>
            <Button variant="contained"> Cancel </Button>
            <br></br>
            <br></br>
            <br></br>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }}>
                <InputLabel id="demo-simple-select-label">Private?</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Private"
                >
                    <MenuItem value={10}>Private</MenuItem>
                    <MenuItem value={20}>Friends list</MenuItem>
                    <MenuItem value={30}>Public</MenuItem>
                </Select>
            </FormControl>


            <TextField className={styles.textBox} id="" label="Title" variant="outlined" />
            <br></br>
            <TextField className={styles.textBox} id="outlined-basic" label="Description" variant="outlined" />
            <br></br>
            <TextField className={styles.textBox} id="outlined-basic" label="Servings" variant="outlined" />
            <br></br>
            <TextField className={styles.textBox} id="outlined-basic" label="Ingredients" variant="outlined" />
            <br></br>
            <TextField className={styles.textBox} id="outlined-basic" label="Steps" variant="outlined" />
            <br></br>
            <TextField className={styles.textBox} id="outlined-basic" label="Notes" variant="outlined" />

            <Button variant="contained"> Save  </Button>
            <Button variant="contained"> Cancel </Button>
        </div>
    )
}