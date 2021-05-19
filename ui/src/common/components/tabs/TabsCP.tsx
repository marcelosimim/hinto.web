import React, { useContext, useEffect, useState } from 'react'
import { Tabs } from 'antd'
import { ITabsChildren } from './interfaces/ITabsChildren'
import { GlobalContext } from '../../context/GlobalContext'

interface ITabsCPProps {
  tabs: ITabsChildren[]
  defaultActiveKey?: string
}

const { TabPane } = Tabs

/**
 * Abstrai o import do componente de tabs do antd para o sistema
 * @see https://ant.design/components/tabs/
 *
 * @author rafaelvictor01
 * @param props ITabsCPProps
 * @returns JSX.Element
 */
export default function TabsCP(props: ITabsCPProps): JSX.Element {
  const globalContext = useContext(GlobalContext)

  useEffect(whenRender, [])
  const [tabItens, setTabItens] = useState([])

  function whenRender(): void {
    setTabItens(
      props.tabs.map(currentChildren => (
        <TabPane tab={currentChildren.tabName} key={currentChildren.tabName}>
          {currentChildren.tabContent}
        </TabPane>
      ))
    )
  }

  return (
    <Tabs
      defaultActiveKey={
        props.defaultActiveKey ? props.defaultActiveKey : 'MINHA LISTA'
      }
      onChange={(activeKey: string) => globalContext.setCurrentTab(activeKey)}
      centered
    >
      {tabItens.map(currentItem => currentItem)}
    </Tabs>
  )
}
