import React, { useState, ChangeEvent } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {FormLabel} from "@mui/material";

const SelectImageCount: React.FC = () => {
    const [maxImages, setMaxImages] = useState<number>(1);

    // this could be merged with sub breed change and we pass a param to set type
    const handleMaxChange = (event: ChangeEvent<{ value: unknown }>) => {
        const max =  event.target.value as number;
        setMaxImages(max)
    };

    return (
        <>
            <FormLabel>Max images</FormLabel>
            <Select name="max" value={maxImages} onChange={handleMaxChange} fullWidth>
                {[...Array(10)].map((number, index) => (
                    <MenuItem key={index} value={index + 1}>{index + 1}</MenuItem>
                ))}
            </Select>
        </>
    );
};

export default SelectImageCount;