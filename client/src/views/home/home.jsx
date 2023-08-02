import { useEffect } from "react";
import {Card} from "../../components/index"
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";



const Home = () => {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)

    useEffect(()=>{
        if (products?.length === 0) dispatch(getAllProducts()) 
        
    },[products])

    return (
        <div>
            {products?.map(({id,title,image,description,category,price }) => 
                
                <Card
                key={id}
                id={id}
                title={title}
                description={description}
                price={price}
                category={category}
                image={image}
                />
                )}
                
                
        </div>
    )

}

export default Home;