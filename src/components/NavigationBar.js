/**
 * Created by Will on 2017/5/2.
 */
import React,{Component} from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'
class NavigationBar extends Component{
    constructor(){
        super()
    }
    render(){
        return (<div>
            <ul>
                <li>
                    <a href="/" > 首页</a>
                </li>
                <li>
                    <a href="/topics" >话题</a>
                </li>
                <li>
                    <a href="/notifications" >通知</a>
                </li>
                <li>
                    <a href ="">学习</a>
                </li>
            </ul>
        </div>)
    }
}

export default NavigationBar