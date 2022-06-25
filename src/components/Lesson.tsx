import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'
import { isPast, format  } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import classNames from 'classnames'

interface LessonProps {
  title: string
  slug: string
  avaibleAt: Date
  type: 'live' | 'class'
}

export const Lesson = (props: LessonProps) => {
  const { slug } = useParams()

  const isLessonAvaiable = isPast(props.avaibleAt)
  const avaiableDateFormatted = format(props.avaibleAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR }) 

  const isActiveLesson = props.slug === slug

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
        {avaiableDateFormatted}
      </span>
      <div className={classNames('order border-gray-500 rounded p-4 mt-2 group-hover:border-green-500', {
        'bg-green-500': isActiveLesson
      })}>
        <header className="flex items-center justify-between">
          { isLessonAvaiable ? (
            <span className={classNames('flex items-center gap-2 text-sm font-medium', {
              'text-white': isActiveLesson,
              'text-blue-500': !isActiveLesson
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className={classNames('border rounded text-white py-[0.125rem] px-2 text-xs font-bold', {
            'border-white': isActiveLesson,
            'border-green-300': !isActiveLesson
          })}>
            { props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className={classNames('mt-5 block', {
          'text-gray-200': !isActiveLesson,
          'text-white': isActiveLesson
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}