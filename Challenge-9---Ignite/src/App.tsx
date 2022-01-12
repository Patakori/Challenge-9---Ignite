import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import { ContextsProvider } from './hook/context'

import './styles/global.scss';




export function App() {

  return (
    < ContextsProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <SideBar />
        <Content />
        
      </div>  
    </ContextsProvider>
  )
}