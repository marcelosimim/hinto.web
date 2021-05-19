import axios, { AxiosInstance } from 'axios'
import { useRouter } from 'next/dist/client/router'
import React, { createContext, useEffect, useState } from 'react'
import { IUserAuthResponseDTO } from '../../interfaces/dtos/response/IUserAuthResponseDTO'

const axiosRecommendation = axios.create({
  baseURL: 'https://hinto-rec.herokuapp.com/ai/',
  timeout: 6000
})

// Definição do type personalizado do nosso contexto
type GlobalContextTP = {
  /** Para o controle de acesso */
  authUser?: IUserAuthResponseDTO
  getCurrentUser : () => IUserAuthResponseDTO
  login: (user: IUserAuthResponseDTO) => void
  logout: () => void

  /** Para o Drawer */
  showDrawer: boolean
  setShowDrawer: (showDrawer: boolean) => void

  /** Para o modal */
  showModal: boolean
  movieIDToModal: number
  openMovieDetailsModal: (movieID: number) => void
  closeMovieDetailsModal: () => void

  /** Outros */
  axiosRecommendation: AxiosInstance
  currentTab: string
  setCurrentTab: (currentTab: string) => void
}

// O type que acabamos de criar para o nosso contexto agora é "tratado".
// Usando o Partial, fazemos com que tudo definido acima seja opcional.
// Sendo tudo opcional, inicializamos nosso contexto vazio
export const GlobalContext = createContext<Partial<GlobalContextTP>>({})

/**
 * Cria o contexto global da aplicação por meio da API nativa do React -> React Context.
 * @author rafaelvictor01
 */
export const GlobalContextProvider: React.FC = ({ children }) => {
  const router = useRouter()

  axios.defaults.baseURL = 'https://hinto-api.herokuapp.com'

  const [showDrawer, setShowDrawer] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [movieIDToModal, setMovieIDToModal] = useState(null)
  const [authUser, setAuthUser] = useState(getCurrentUser())
  const [currentTab, setCurrentTab] = useState('')

  function openMovieDetailsModal(movieID: number): void {
    setShowModal(true)
    setMovieIDToModal(movieID)
  }

  function closeMovieDetailsModal(): void {
    setShowModal(false)
    setMovieIDToModal(null)
  }

  function getCurrentUser() : IUserAuthResponseDTO{
    if (typeof window !== 'undefined') {
      return JSON.parse(window.sessionStorage.getItem('currentUser'))
    }
    return undefined;
  }

  function login(user: IUserAuthResponseDTO): void {
    if (typeof window !== 'undefined') {
     sessionStorage.setItem('currentUser', JSON.stringify(user))
     router.replace('/home')
    }
  }

  function logout(): void {
    window.sessionStorage.clear()
    router.replace('/')
  }

  return (
    <GlobalContext.Provider
      value={{
        showDrawer,
        setShowDrawer,
        showModal,
        movieIDToModal,
        axiosRecommendation,
        openMovieDetailsModal,
        closeMovieDetailsModal,
        authUser,
        login,
        logout,
        setCurrentTab,
        currentTab
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

