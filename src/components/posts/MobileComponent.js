import React from 'react';
import moment from 'moment';
import LazyLoad from 'react-lazyload';
import Loader from "../common/Loader";

function MobileComponent(props) {
  
  const data = props.data;

  return (
    <div className="mobile-view">
      <table>
        {data.posts.map((post, index) => 
          <tbody key={index} className={index%2 ? 'odd' : 'even'}>        
            <tr>
              <td>ID</td>
              <td>{post.id}</td>
            </tr>
            <tr>
              <td>Property</td>
              <td>{props.renderProperty(post.property_id)}</td>          
            </tr>
            <tr>
              <td>User</td>
              <td>{props.renderUser(post.user_id)}</td>          
            </tr>
            <tr>
              <td>Network</td>
              <td>
                <div className={'social-link ' + post.social_network}>                  
                  {props.renderIcon(post.social_network)}
                </div>
              </td>          
            </tr>
            <tr>
              <td>Date</td>
              <td>
                {moment(post.post_date).format("dddd")} {moment(post.post_date).format("MMM DD")} {moment(post.post_date).format("YYYY")}
              </td>          
            </tr>
            <tr>
              <td>Image</td>
              <td>
                <LazyLoad height={200} placeholder={<Loader />}>
                  { post.post_media !== "null" && post.post_media !== null ? <img src={post.post_media} alt="Post Pic"/> : <div className="no-image"></div>}
                </LazyLoad>
              </td>          
            </tr>
            <tr>
              <td>Content</td>
              <td>
                <div dangerouslySetInnerHTML={{ __html: props.sanitize(post.post_content)}}></div>
              </td>          
            </tr>
          </tbody>            
        )}
      </table>
    </div>
  )
}

export default MobileComponent;