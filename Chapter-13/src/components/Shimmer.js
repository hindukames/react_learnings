import {shimmer_card_unit} from  "../config";

const IndividualShimmer =()=>{ 
   return( 
       <div className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-cardname"></div>
            <div className="shimmer-ratings"></div>
       </div>
   )
}   

const BodyShimmer =()=> {
    return(
        <div className="shimmer-container" data-testid="shimmer">
             { new Array(shimmer_card_unit).fill(0).map((element,index) =><IndividualShimmer key={index}/>)}

        </div>
    )
}


export default BodyShimmer;