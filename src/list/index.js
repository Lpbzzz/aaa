/*
 * @Date: 2019-12-06 11:19:23
 * @LastEditors: Lpbzzz
 * @LastEditTime: 2019-12-06 12:04:31
 */
import React from 'react'
import { connect } from 'dva'
import Show from "@/list/show";


function App(props){
    console.log('props', props)
    return (
        <div>
            <Show/>
            333
        </div>
    )
}


export default connect(({ list, loading }) => { return { list, loading: loading.models.list } })(App)
