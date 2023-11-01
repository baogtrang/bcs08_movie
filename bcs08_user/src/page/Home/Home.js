import React from 'react'
import MovieList from './MovieList/MovieList'
import MovieTab from './MovieTab/MovieTab'
import Slider from './Slider/Slider'
import MovieDropdown from '../../components/TicketBuying/MovieDropdown'

export default function Home() {
  
  return (
    <div className='space-y-10'>
      <Slider/>
      <MovieDropdown/>
      <MovieList>Danh sách phim</MovieList>
      <MovieTab/>
    </div>
  )
}
