import React from 'react';
import moment from 'moment';
import LazyLoad from 'react-lazyload';
import Loader from "../common/Loader";

function DesktopComponent(props) {

  const data = props.data;
  
  return (
    <div className="content">
      {         
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Property</th>
              <th>User</th>
              <th>Network</th>
              <th>Date</th>
              <th>Image</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {data.posts.map(post => 
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{props.renderProperty(post.property_id)}</td>
                <td>{props.renderUser(post.user_id)}</td>
                <td>
                  <div className={'social-link ' + post.social_network}>
                    {props.renderIcon(post.social_network)}
                  </div>
                </td>
                <td>
                  <p>{moment(post.post_date).format("dddd")}</p>
                  <p>{moment(post.post_date).format("MMM DD")}</p>
                  <p>{moment(post.post_date).format("YYYY")}</p>
                </td>
                <td>
                  <LazyLoad height={200} placeholder={<Loader />}>
                    { post.post_media !== "null" && post.post_media !== null ? <img src={post.post_media} alt="Post Pic"/> : <div className="no-image"></div>}
                  </LazyLoad>
                </td>
                <td ><div dangerouslySetInnerHTML={{ __html: props.sanitize(post.post_content)}}></div></td>
              </tr>
            )}
          </tbody>
        </table>
      }
  </div>
  )
}

export default DesktopComponent;