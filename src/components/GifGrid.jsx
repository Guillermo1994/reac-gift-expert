
import { GifItem } from "./GifItem";
import PropTypes from 'prop-types'
import { useFetchGifts } from "../hooks/useFetchGifts";


export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifts(category);


  return (
    <>
    <h3>{category}</h3>
    {
      isLoading && (<h2>cargando...</h2>)
    }
    <div className="card-grid">
      {
        images.map( (image) => (
          <GifItem 
          key={image.id}
          {...image}
          />
        ) )
      }
    </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
