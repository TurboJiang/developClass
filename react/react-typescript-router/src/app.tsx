import * as React from 'react';
import {Header} from './components/header'

// 接受外界传参 props
export const App: React.StatelessComponent<{}> = (props) => {
    return(
        <Header />
    )
}