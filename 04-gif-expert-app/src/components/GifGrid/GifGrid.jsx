import { useEffect, useState } from "react";
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
                    images.map(({ id, title, url }) => (
                        <div key={id}>
                            <li >{title}</li>
                            <img src={url} alt={title} />
                        </div>
                    ))
                }

            </ol>
        </>
    )
}
