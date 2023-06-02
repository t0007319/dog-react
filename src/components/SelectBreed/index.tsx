import React, { useState, useEffect, ChangeEvent } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import useSelectedBreedStore from '../../store/selectedBreedStore';
import {fetchAllBreeds} from "../../api/dogs.ts";
import Grid from "@mui/material/Grid";
import {FormLabel} from "@mui/material";

/**
 * Could be reused outside of component twice and we set a type param here instead
 * @constructor
 */
const SelectBreed: React.FC<{formErrors: {breed: boolean, subBreed: boolean}}> = ({formErrors}) => {
    const [breeds, setBreeds] = useState<string[]>([]);

    // zustand state management isn't really needed here as we can get away with forms
    // but just showing i understand stores etc
    const selectedBreed = useSelectedBreedStore((state) => state);
    const setSelectedBreed = useSelectedBreedStore((state) => state.setSelectedBreed);

    // could potentially pass this as a prop in homepage so this component is more usable
    useEffect(() => {
        const fetchDogBreeds = async () => {
            try {
                const data = await fetchAllBreeds();
                setBreeds(data.message);
            } catch (error) {
                // Handle error
            }
        };

        fetchDogBreeds();
    }, []);

    // this could be merged with sub breed change and we pass a param to set type
    const handleBreedChange = (event: ChangeEvent<{ value: unknown }>) => {
        const breedType =  event.target.value as string;

        setSelectedBreed({
            ...selectedBreed,
            currentBreed: breedType,
            availableSubBreeds: breeds[breedType]
        });
    };

    const handleSubBreedChange = (event: ChangeEvent<{ value: unknown }>) => {
        const subBreedType =  event.target.value as string;

        setSelectedBreed({
            ...selectedBreed,
            currentSubBreed: subBreedType,
        });
    };

    return (
        <>
            <Grid item xs={4}>
                <FormLabel>Breed</FormLabel>
                <Select error={formErrors.breed} name="breed" value={selectedBreed.currentBreed} onChange={handleBreedChange} fullWidth>
                    {Object.keys(breeds).map((breed, index) => (
                        <MenuItem key={index} value={breed}>{breed}</MenuItem>
                    ))}
                </Select>
            </Grid>

            {selectedBreed.availableSubBreeds.length !== 0 &&
                <Grid item xs={4}>
                    <FormLabel>Sub Breed</FormLabel>
                    <Select error={formErrors.breed} name="sub_breed" value={selectedBreed.currentSubBreed} onChange={handleSubBreedChange} fullWidth>
                        {selectedBreed.availableSubBreeds.map((subBreed, index) => (
                            <MenuItem key={index} value={subBreed}>{subBreed}</MenuItem>
                        ))}
                    </Select>
                </Grid>
            }
        </>
    );
};

export default SelectBreed;