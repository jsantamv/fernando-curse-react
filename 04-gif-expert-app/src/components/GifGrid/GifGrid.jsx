import { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";

import { getGifs } from "../../api/getGifs";


export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const images = await getGifs(category);
        setImages(images);
    }

    useEffect(() => {
        getImages();
    }, [])

    return (
        <>
            <h3>{category}</h3>
            <ol>
                {
                    images.map((image) => (
                        <GifGridItem
                            className="card-grid"
                            key={image.id}
                            // para cuando necesitamos esparcir las propietes
                            {...image}
                        />
                    ))
                }
            </ol>
        </>
    )
}
