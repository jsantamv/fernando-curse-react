import { getGifs } from "../../api/getGifs";


export const GifGrid = ({ category }) => {

    getGifs(category);

    return (
        <>
            <h4>{category}</h4>
        </>
    )
}
