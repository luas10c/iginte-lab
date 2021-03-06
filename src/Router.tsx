import { Routes, Route } from 'react-router-dom' 

import { Subscribe } from '@/pages/Subscribe'
import { Event } from '@/pages/Event'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  )
}