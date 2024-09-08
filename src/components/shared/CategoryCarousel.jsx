import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
  "Software Development",
  "Flutter Development"
]
const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/Browse");
   
  }



  return (
    <div>
      <Carousel className="w-full mx-auto my-15 max-w-xl">
        <CarouselContent>
          {
            category.map((cat , index) => (
              <CarouselItem className="md:basis-1/2 lg-basis-1/3">
                <Button onClick={()=> searchJobHandler(cat)} variant="outline" className="font-bold rounded-full">{cat}</Button>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  )
}

export default CategoryCarousel;;