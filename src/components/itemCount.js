import { useState } from "react"

function ItemCount(quantitySelected){

    const [count, setCount] = useState(1);

    const addQuantity = () => {
        setCount(count +1)
    }

    const removeQuantity = () => {
        setCount(count -1)
    }

    const onAdd = () => {
        quantitySelected(count)
    }

    return(

            <div class="card" style="width: 18rem;">

            <div class="card-body">

                <h3 class="card-title">Contador</h3>

                <h5>{count}</h5>

                <button onClick={addQuantity}>+</button>

                <button onClick={removeQuantity}>-</button>

            </div>

        </div>

    )

}

export default ItemCount;