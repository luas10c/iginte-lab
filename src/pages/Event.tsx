import { useParams } from 'react-router-dom'

import { Header } from '@/components/Header'
import { Video } from '@/components/Video'
import { Sidebar } from '@/components/Sidebar'

type Params = Record<'slug', string>

export const Event = () => {
  const { slug } = useParams<Params>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        { slug 
          ? <Video slug={slug} /> 
          : <div className="flex-1"></div>
        }
        <Sidebar />
      </main>
    </div>
  )
}