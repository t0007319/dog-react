import * as React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SelectBreed from "../SelectBreed";
import useSelectedBreedStore from "../../store/selectedBreedStore.ts";
import SelectImageCount from "../SelectImageCount";

import {fetchAllBreeds, fetchBreedImages, fetchSubBreedImages} from "../../api/dogs.ts";
import {useEffect, useState} from "react";
import BreedImages from "../BreedImages/BreedImages.tsx";
import {FormLabel} from "@mui/material";

export default function HomePage() {
    // unused but there to show we can use form or a store
    const selectedBreed = useSelectedBreedStore((state) => state);
    const [dogImages, setDogImages] = useState([]);
    const [formErrors, setFormErrors] = useState({
        breed: false, subBreed: false,
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const breed = data.get('breed');
        const subBreed = data.get('sub_breed');
        const max = Number(data.get('max'));

        // this bit can be condensed into one and cleaned up
        const fetchImageUrls = async (breed: string, maxCount: number) => {
            try {
                const data = await fetchBreedImages(breed, maxCount);
                setDogImages(data.message);
            } catch (error) {
                // Handle error
            }
        };

        const fetchSubImageUrls = async (breed: string, subBreed: string, maxCount: number) => {
            try {
                const data = await fetchSubBreedImages(breed, subBreed, maxCount);
                setDogImages(data.message);
            } catch (error) {
                // Handle error
            }
        };

        setFormErrors({breed: !breed, subBreed: !subBreed})

        if (breed && !subBreed && max) {
            fetchImageUrls(breed, max);
        }

        if (breed && subBreed && max) {
            fetchSubImageUrls(breed, subBreed, max);
        }

    };

    return (
        <Box paddingTop={2}>
            <Typography component="h1" variant="h5">
                dog.ceo
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                    <Grid container spacing={2}>
                        <SelectBreed formErrors={formErrors}/>

                        <Grid item xs={4}>
                            <SelectImageCount/>
                        </Grid>

                        <Grid item xs={2}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                style={{marginTop: "1.5rem", height: "3.5rem"}}
                            >
                                Show
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <BreedImages images={dogImages}/>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}