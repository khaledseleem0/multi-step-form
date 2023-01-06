export function priceHander(currantSub,monthly,yearly){
     return <>{currantSub ? monthly :yearly}{currantSub ? "/mo": "/year" }</>
 }
 