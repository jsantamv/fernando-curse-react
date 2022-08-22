import { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../../hooks/useFetchGifs";



export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

    console.log({ images, isLoading })


    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const images = await getGifs(category);
    //     setImages(images);
    // }

    // useEffect(() => {
    //     getImages();
    // }, [])

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
