import { useState } from "react";

 
function CarouselComponent() {

    const [itemNo,setItemNo] = useState(1)

    const handleChange = (action)=>{
        if(action=='next'){
            setItemNo(itemNo+1)
        }else if(action=='prev'){
            setItemNo(itemNo-1)
        }
    }
  return (
    <div id="controls-carousel" className=" w-full h-full" data-carousel="static">
  
    <div className="relative h-full overflow-hidden rounded-lg">
   
      <div className={`duration-700 ${itemNo==1?'':'hidden'} ease-in-out`} data-carousel-item>
        <img src="https://d.newsweek.com/en/full/2003546/black-panther.jpg?w=1600&h=900&q=88&f=03d48b7a58a8921a418c7182c5876377" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
      </div>
   
      <div className={`duration-700 ${itemNo==2?'':'hidden'} ease-in-out`} data-carousel-item="active">
        <img src="https://stories.sandiegozoo.org/wp-content/uploads/2017/11/T17_0603_021.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
      </div>
      
      <div className={`duration-700 ${itemNo==3?'':'hidden'} ease-in-out`} data-carousel-item>
        <img src="https://assets.iflscience.com/assets/articleNo/51539/iImg/48981/1550141910-lt2mgm8q.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
      </div>
  </div>

    <button onClick={()=>handleChange('prev')} type="button" className={`${itemNo<=1?'hidden':''} absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none`} data-carousel-prev>
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
        </svg>
        <span className="sr-only">Previous</span>
      </span>
    </button>
    <button onClick={()=>handleChange('next')} type="button" className={`${itemNo>=3?'hidden':''} absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none`} data-carousel-next>
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span className="sr-only">Next</span>
      </span>
    </button>
  </div>
  );
}

export default CarouselComponent