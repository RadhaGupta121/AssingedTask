const Icons=(props)=>{
    return(
        <>
       <div className="w-20 h-18 bg-white px-1 py-1">
        <img src={props.img} alt="not found" className="w-20 h-16"/>
        <h3 className="text-black text-center">{props.title}</h3>
       </div>
        </>
    )
}
export default Icons;