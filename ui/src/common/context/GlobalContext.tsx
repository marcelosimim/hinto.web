import axios from 'axios'
import { useRouter } from 'next/dist/client/router'
import React, { createContext, useState } from 'react'
import { IUserAuthResponseDTO } from '../../interfaces/dtos/response/IUserAuthResponseDTO'

// Definição do type personalizado do nosso contexto
type GlobalContextTP = {
  /** Para o controle de acesso */
  authUser: Partial<IUserAuthResponseDTO>
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
  const [authUser, setAuthUser] = useState({})

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
    setAuthUser({})
    router.replace('/')
  }

  return (
    <GlobalContext.Provider
      value={{
        showDrawer,
        setShowDrawer,
        showModal,
        movieIDToModal,
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
