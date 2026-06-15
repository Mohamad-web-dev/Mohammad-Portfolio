const ShowImg = ({img,setActiveImg})=>{
    return(
        <div className="popup-image position-absolute top-0 left-0" >
            <button onClick={()=>setActiveImg("")} type="button">بستن</button>
            <img className="w-75 h-75" src={img} alt="" srcset=""  />
        </div>
    )
}

export default ShowImg