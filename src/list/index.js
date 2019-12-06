/*
 * @Date: 2019-12-06 11:19:23
 * @LastEditors: Lpbzzz
 * @LastEditTime: 2019-12-06 12:04:31
 */
import React from 'react'
import { connect } from 'dva'


function App(props){
    console.log('props', props)
    return (
        <div>2224</div>
    )
}


export default connect(({ list, loading }) => { return { list, loading: loading.models.list } })(App)