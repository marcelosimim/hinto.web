import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd'
import { ITabsChildren } from './interfaces/ITabsChildren'

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
  useEffect(whenRender, [])
  const [tabItens, setTabItens] = useState([])

  function whenRender(): void {
    setTabItens(
      props.tabs.map((currentChildren, index) => (
        <TabPane tab={currentChildren.tabName} key={`${index}`}>
          {currentChildren.tabContent}
        </TabPane>
      ))
    )
  }

  return (
    <Tabs defaultActiveKey={props.defaultActiveKey} centered>
      {tabItens.map(currentItem => currentItem)}
    </Tabs>
  )
}
