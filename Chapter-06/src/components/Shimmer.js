import {shimmer_card_unit} from  "../config";

const IndividualShimmer =()=>{ 
   return( 
       <div className="shimmer-card">
            <div className="shimmer-image">Images</div>
            <div className="shimmer-cardname">Restaruant</div>
            <div className="shimmer-stroke-animate">Ratings</div>
       </div>
   )
}   

const BodyShimmer =()=> {
    return(
        <div className="shimmer-container">
             { new Array(shimmer_card_unit).fill(0).map((element,index) =><IndividualShimmer key={index}/>)}

        </div>
    )
}


export default BodyShimmer;