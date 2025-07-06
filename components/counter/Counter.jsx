export const Counter=({count,countHandler,countDownHandler})=>{
    return(
        <div>
           <p> current count:{count}</p>
           <button onClick ={countHandler}> Count Up </button>
            <button onClick ={countDownHandler}> Count down </button>
        </div>
    )
}


