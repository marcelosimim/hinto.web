import React, { createContext, useState } from 'react'

// Definição do type personalizado do nosso contexto
type GlobalContextTP = {
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
  const [showDrawer, setShowDrawer] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [movieIDToModal, setMovieIDToModal] = useState(null)

  function openMovieDetailsModal(movieID: number): void {
    setShowModal(true)
    setMovieIDToModal(movieID)
  }

  function closeMovieDetailsModal(): void {
    setShowModal(false)
    setMovieIDToModal(null)
  }

  return (
    <GlobalContext.Provider
      value={{
        showDrawer,
        setShowDrawer,
        showModal,
        movieIDToModal,
        openMovieDetailsModal,
        closeMovieDetailsModal
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
