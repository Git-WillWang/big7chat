/**
 * Created by Will on 2017/5/2.
 */
import React,{PropTypes} from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'

export const NavigationBar = ()=>{
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/" > 首页</Link>
                    </li>
                    <li>
                        <Link to="/topics" >话题</Link>
                    </li>
                    <li>
                        <Link to="/notifications" >通知</Link>
                    </li>
                    <li>
                        <Link to ="">学习</Link>
                    </li>
                </ul>
            </div>
        </Router>
    )
}

NavigationBar.propTypes={
    
}