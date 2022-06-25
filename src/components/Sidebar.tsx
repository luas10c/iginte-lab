import { useGetLessonsQuery } from '@/graphql/generated'

import { Lesson } from '@/components/Lesson'

export const Sidebar = () => {
  const { data } = useGetLessonsQuery()

  return (
    <aside className="hidden lg:block w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">Conograma de aulas</span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              avaibleAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
        
      </div>
    </aside>
  )
}