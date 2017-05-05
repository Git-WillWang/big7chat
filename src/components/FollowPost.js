/**
 * Created by will on 2017/5/5.
 */
import {PropTypes} from 'prop-types'

const FollowPost=({me,post})=>{
    if(post.userId&&post.userId === me.userId){
        return (<span></span>)
    }
    if(post.followed){
        return (<a onClick={me.userId?this.follow:showSignPage}>关注</a>)
    }
    else{
        return (<a onClick={unfollow}>已关注</a>)
    }
}
const follow=({id,callback=()=>{}})=>{

}
FollowPost.propTypes={
    post:PropTypes.object.isRequired,
    me:PropTypes.object.isRequired,
    follow:
}