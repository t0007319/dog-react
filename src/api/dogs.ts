import axios from 'axios';
import { API_URL_DOGS_CEO } from '../constants';

export const fetchBreedRandomImage = (breed: string) => {
    return axios
        .get(`${API_URL_DOGS_CEO}/breed/${breed}/images/random`)
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error fetching dog data:', error);
            throw error;
        });
};

export const fetchAllBreeds = () => {
    return axios
        .get(`${API_URL_DOGS_CEO}/breeds/list/all`)
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error fetching all breeds data:', error);
            throw error;
        });
};

export const fetchRandomBreedImage = () => {
    return axios
        .get(`${API_URL_DOGS_CEO}/breeds/image/random`)
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error fetching random breed image:', error);
            throw error;
        });
};

export const fetchBreedImages = (breed: string, max: number) => {
    return axios
        .get(`${API_URL_DOGS_CEO}/breed/${breed}/images/random/${max}`)
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error fetching breed images:', error);
            throw error;
        });
};

export const fetchSubBreedImages = (breed: string, subBreed: string, max: number) => {
    return axios
        .get(`${API_URL_DOGS_CEO}/breed/${breed}/${subBreed}/images/random/${max}`)
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error fetching breed images:', error);
            throw error;
        });
};

export const fetchSubBreeds = (breed: string) => {
    return axios
        .get(`${API_URL_DOGS_CEO}/breed/${breed}/list`)
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error fetching sub-breeds:', error);
            throw error;
        });
};
