import React, { useReducer } from 'react';
import axios from 'axios';
import gitHubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  const getUser = async username => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}`);
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  const getUserRepos = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  return (
    <gitHubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers: searchUsers,
        clearUsers: clearUsers,
        getUser: getUser,
        getUserRepos: getUserRepos
      }}
    >
      {props.children}
    </gitHubContext.Provider>
  );
};

export default GithubState;
