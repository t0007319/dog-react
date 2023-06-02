import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function BreedImages(imageUrls) {

    return (
        <ImageList sx={{ width: "80%" }} cols={3} >
            {imageUrls?.images.length > 0 && imageUrls.images.map((item, index) => (
                <ImageListItem key={index}>
                    <img
                        src={item}
                        srcSet={item}
                        loading="lazy"
                        alt={''}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}