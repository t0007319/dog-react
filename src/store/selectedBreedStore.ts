import { create } from 'zustand';

type SelectedBreedState = {
    currentBreed: string;
    currentSubBreed: string;
    availableSubBreeds: string[];
};

const useSelectedBreedStore = create<SelectedBreedState>((set) => ({
    currentBreed: '',
    currentSubBreed: '',
    availableSubBreeds: [],

    setSelectedBreed: (newSelectedBreed: SelectedBreedState) => {
        set((state) => ({ ...state, ...newSelectedBreed }));
    },
    resetSelectedBreed: () => {
        set({
            currentBreed: '',
            currentSubBreed: '',
            availableSubBreeds: [],
        });
    },
}));

export default useSelectedBreedStore;