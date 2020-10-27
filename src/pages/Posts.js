import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import toMarkdown from 'to-markdown'
import marked from 'marked'

import Layout from "../components/Layout";
import Loader from "../components/common/Loader";
import ErrorScreen from '../components/common/ErrorScreen';
import { getUsers, getPosts, getProperties } from '../actions/interview';
import MobileComponent from '../components/posts/MobileComponent';
import DesktopComponent from '../components/posts/DesktopComponent';

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    function handleWidth() {
      setWindowWidth(window.innerWidth);
    }
    
    window.addEventListener("resize", handleWidth);
    handleWidth();
    
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return windowWidth;
}

function Posts() {

  const dispatch = useDispatch();

  const width = useWindowWidth();

  const data = useSelector(state => state.interviewData);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
    dispatch(getProperties());
  }, [dispatch]);

  const sanitize = (htmlString) => {
    if(htmlString === "null")
      return "";
    let markString = marked(toMarkdown(htmlString), {sanitize: true})
    const pattern = /\B@[a-z0-9_-]+/gi;
    const result = markString.match(pattern);
    if(result)
      markString = markString.replace(result, '<span class="mentions">' + result + '</span>');
    return markString;
  }

  const renderIcon = (social_network) => {
    if(social_network === 'instagram' || social_network === 'instagram_graph')
      return <i className="fa fa-instagram" aria-hidden="true"></i>;
    else if(social_network === 'twitter')
      return <i className="fa fa-twitter" aria-hidden="true"></i>;
    else if(social_network === 'linkedin')
      return <i className="fa fa-linkedin" aria-hidden="true"></i>;
    else if(social_network === 'facebook')
      return <i className="fa fa-facebook" aria-hidden="true"></i>;
    else if(social_network === 'null')
      return <i className="fa fa-share-alt" aria-hidden="true"></i>;
  }

  const renderUser = (user_id) => {
    const user = data.users.find(user => user.id === user_id);
    return user ? 
            <>
              <p>{user.name}</p>
              <div className="image-outer">
                <div className="image-inner">
                  <img src={user.profile_picture} alt="Profile Pic"/>
                </div>                
              </div>
            </>
       : <>
          <p>Unknown</p>
          <div className="image-outer">
            <div className="no-image"></div>
          </div>
        </>;
  }

  const renderProperty = (property_id) => {
    const property = data.properties.find(property => property.id === property_id);
    return property ? property.name : 'Unknown';
  }

  return (
    <Layout>
      <h1>Latest Posts</h1>
      {
        data.error ? <ErrorScreen/> :
        data.loading ? <div className="main-loading"><Loader /></div> :
        width > 768 ?
          <DesktopComponent 
            data={data}
            renderProperty={renderProperty}
            renderUser={renderUser}
            renderIcon={renderIcon}
            sanitize={sanitize}
          /> :  
          <MobileComponent 
            data={data}
            renderProperty={renderProperty}
            renderUser={renderUser}
            renderIcon={renderIcon}
            sanitize={sanitize}
          />
      }
    </Layout>
  );
}

export default Posts;
