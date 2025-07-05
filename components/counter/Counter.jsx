export const Counter=({count,countHandler,countdownHandler})=>{
    return(
        <div>
           <p> current count:{count}</p>
           <button onClick ={countHandler}> Count Up </button>
            <button onClick ={countdownHandler}> Count down </button>
        </div>
    )
}


