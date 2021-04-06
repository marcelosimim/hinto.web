import React from 'react'
import { ITabsChildren } from '../../../../common/components/tabs/interfaces/ITabsChildren'
import MyListTabCP from '../../my-list-tab/MyListTabCP'

export const TABS: ITabsChildren[] = [
  {
    tabName: 'MINHA LISTA',
    tabContent: <MyListTabCP />
  },
  {
    tabName: 'PESQUISAR',
    tabContent: <>PESQUISAR</>
  },
  {
    tabName: 'RECOMENDADOS',
    tabContent: <>RECOMENDADOS</>
  }
]
