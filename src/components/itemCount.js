import { useState } from "react"


function itemCount(){
    const [count, setCount] = useState(0);
    return(
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h3 class="card-title">Contador</h3>
                <h5>{count}</h5>
                <button onClick={()=> setCount(count ++)}>+</button>
                <button onClick={()=> setCount(count --)}>-</button>
            </div>
        </div>
    )
}

export default itemCount;