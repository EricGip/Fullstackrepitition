'use client';

import { useState, ChangeEvent } from "react";

import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import styles from "./createRecipe.module.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



export default function createRecipe() {

    const [title, setTitle] = useState("Recipe name");
    const [description, setDescription] = useState("Description");
    const [serving, setServing] = useState("Servings");
    const [ingredients, setIngredients] = useState("Ingredients");
    const [steps, setSteps] = useState("Steps");
    const [notes, setNotes] = useState("Notes");


    function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value); 

    }

    function handleDescriptionChange(e: ChangeEvent<HTMLInputElement>) {
        setDescription(e.target.value); 

    }

    function handleServingChange(e: ChangeEvent<HTMLInputElement>) {
        setServing(e.target.value); 

    }

    function handleIngredientsChange(e: ChangeEvent<HTMLInputElement>) {
        setIngredients(e.target.value); 
        console.log(ingredients);
    }

    function handleStepsChange(e: ChangeEvent<HTMLInputElement>) {
        setSteps(e.target.value); 
        console.log(steps);
    }

    function handleNoteChange(e: ChangeEvent<HTMLInputElement>) {
        setNotes(e.target.value); 
        console.log(notes);
    }



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
                    <MenuItem >Private</MenuItem>
                    <MenuItem >Friends list</MenuItem>
                    <MenuItem >Public</MenuItem>
                </Select>
            </FormControl>


            <TextField className={styles.textBox} id="outlined-basic" label="Title" variant="outlined" onChange={handleTitleChange} />
            <br></br>
            <TextField className={styles.textBox} id="outlined-basic" label="Description" variant="outlined" onChange={handleDescriptionChange} />
            <br></br>
            <TextField className={styles.textBox} id="outlined-basic" label="Servings" variant="outlined" onChange={handleServingChange} />
            <br></br>
            <TextField className={styles.textBox} id="outlined-basic" label="Ingredients" variant="outlined" onChange={handleIngredientsChange} />
            <br></br>
            <TextField className={styles.textBox} id="outlined-basic" label="Steps" variant="outlined" onChange={handleStepsChange} />
            <br></br>
            <TextField className={styles.textBox} id="outlined-basic" label="Notes" variant="outlined" onChange={handleNoteChange} />

            <Button variant="contained"> Save  </Button>
            <Button variant="contained"> Cancel </Button>
        </div>
    )
}