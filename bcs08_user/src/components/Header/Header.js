import React from 'react'
import { useSelector } from 'react-redux'
import { userLocalStorage } from '../../api/localService';
import { NavLink } from 'react-router-dom';


export default function Header() {
    // hook provided by the react-redux library to extract data from the Redux store
    // useSelector is used to select userReducer from the global state. 
    // Anytime userReducer changes, your Header component will re-render with the new data. 
    // If other parts of the Redux state change but userReducer stays the same, the component won't re-render.
    // useSelector takes a single function ("selector function".)
    // This function receives the entire Redux store STATE as its only argument and returns the part of the state that the component needs.
    let {info} = useSelector ((state)=>{
        return state.userReducer; 
    });

    let handleLogin=()=>{window.location.href="/login"};
    let handleLogout =()=> {
        userLocalStorage.remove();
        window.location.reload();
    }

    let renderUserNav=() => {
        let btnClass="border-2 border-black rounded-xl px-7 py-3"
        if (info) {
            return( 
                <>
                    <span>{info.hoTen}</span>
                    <button onClick={handleLogout} className={btnClass} >Log out</button>
                </>);
        } else {
            return (
                <>
                    <button onClick={handleLogin} className={btnClass} >Log in</button>
                    <button className={btnClass} >Sign up</button>
                </>
            );
        }
    };
    
    return (
        <div className='h-20 flex items-center justify-between shadow-lg px-20 '>
            <NavLink to="/">
                <span className="text-3xl font-medium text-red-600 animate-pulse">
                    Cyberflix
                </span>  
            </NavLink>
            <div className='space-x-5'>{renderUserNav()}</div>    
        </div>
    )
}
