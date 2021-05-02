import React from 'react'
import { ITabsChildren } from '../../../../../common/components/tabs/interfaces/ITabsChildren'
import MyListTabCP from './my-list-tab/MyListTabCP'
import RecommendationsTabCP from './recommendations-tab/RecommendationsTabCP'
import SearchTabCP from './search-tab/SearchTabCP'

/**
 * Agrupa as tabs da tela principal do sistema e define seus respectivos nomes
 * @author rafaelvictor01
 */
export const HomeScreenContentTabsICP: ITabsChildren[] = [
  {
    tabName: 'MINHA LISTA',
    tabContent: <MyListTabCP />
  },
  {
    tabName: 'PESQUISAR',
    tabContent: <SearchTabCP />
  },
  {
    tabName: 'RECOMENDADOS',
    tabContent: <RecommendationsTabCP />
  }
]
