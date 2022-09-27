import { useEffect, useState } from 'react'
import fetchData from '../utils/fetchData'
import ItemDetail from './ItemDetail'
import products from '../utils/products'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        fetchData(2000, products.find(product => product.id === Number(idItem)))
            .then(result => setData(result))
            .catch(err => console.log(err));
    }, []);

  return (
    <ItemDetail item={data} />
  )
}

export default ItemDetailContainer