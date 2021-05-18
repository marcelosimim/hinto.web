import axios, { AxiosInstance } from 'axios'
import { useRouter } from 'next/dist/client/router'
import React, { createContext, useState } from 'react'
import { IUserAuthResponseDTO } from '../../interfaces/dtos/response/IUserAuthResponseDTO'

const axiosRecommendation = axios.create({
  baseURL: 'https://hinto-rec.herokuapp.com/ai/',
  timeout: 6000
})

// Definição do type personalizado do nosso contexto
type GlobalContextTP = {
  /** Para o controle de acesso */
  authUser?: IUserAuthResponseDTO
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
  const [authUser, setAuthUser] = useState(null)

  function openMovieDetailsModal(movieID: number): void {
    setShowModal(true)
    setMovieIDToModal(movieID)
  }

  function closeMovieDetailsModal(): void {
    setShowModal(false)
    setMovieIDToModal(null)
  }

  function login(user: IUserAuthResponseDTO): void {
    setAuthUser(user)
    router.replace('/home')
  }

  function logout(): void {
    setAuthUser(null)
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
        logout
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
