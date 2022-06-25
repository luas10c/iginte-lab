import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ColdMockup from '@/assets/cold_mockup.png'

import { useCreateSubscriberMutation } from '@/graphql/generated'

import { Logo } from '@/components/Logo'

export const Subscribe = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [createSubscriber, { data, loading }] = useCreateSubscriberMutation()
  const navigate = useNavigate()

  const handleSubscribe = (event: React.FormEvent) => {
    event.preventDefault()

    createSubscriber({
      variables: {
        name,
        email
      }
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa sua <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado
            </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              type="text"
              className="bg-gray-900 rounded px-5 h-14"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Seu nome completo"
            />
            <input
            type="email"
            className="bg-gray-900 rounded px-5 h-14"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Digite seu email"
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm disabled:opacity-50 hover:bg-green-700 transition-colors"
            >
                Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src={ColdMockup} className="mt-10" alt="Cold Mockup" />
    </div>
  )
}