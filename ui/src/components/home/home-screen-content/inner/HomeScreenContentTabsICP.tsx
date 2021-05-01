import React from 'react'
import { ITabsChildren } from '../../../../common/components/tabs/interfaces/ITabsChildren'
import MyListTabCP from '../../my-list-tab/MyListTabCP'
import RecommendationsTabCP from '../../recommendations-tab/RecommendationsTabCP'
import SearchTabCP from '../../search-tab/SearchTabCP'

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
