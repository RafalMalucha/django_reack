import React from "react";
import { useSelector } from "react-redux";

function Navbar() {

    const changeIsLoggedInState = () => {
        console.log('')
    }

    const user = useSelector((state) => state.user.value)

    const cart = useSelector((state) => state.cart.value)
 
    return (
            <>
                <div class="navbar bg-gradient-to-r from-primary to-neutral">
                    <div class="flex-1">
                        <a class="btn btn-ghost normal-case text-xl italic hover:not-italic">
                            <a class="text-neutral">SynthShop</a>
                        </a>
                        <a class="normal-case text-xl italic mx-3 text-base-100">Hi {user.username}!</a>
                    </div>
                    <div class="flex-none">
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-circle">
                                <div class="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    {0 !== 0 ? (
                                        <span class="badge badge-sm indicator-item bg-secondary text-accent">{this.state.productsInCart}</span>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </label>
                            <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-neutral shadow">
                                <div class="card-body">
                                    <span class="font-bold text-lg">blabla</span>
                                    <span class="text-info">blablabla</span>
                                    <div class="card-actions">
                                        <button class="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="dropdown dropdown-end">
                                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                    <div class="w-10 rounded-full">
                                        <img src="../images/placeholder.png" />
                                    </div>
                                </label>
                                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52">
                                    <li>
                                        <a class="justify-between">
                                            Profile
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li>
                                    {true ? (
                                        <a onClick={changeIsLoggedInState}>Logout</a>
                                    ) : (
                                        <a onClick={changeIsLoggedInState}>Login</a>
                                    )}    
                                    </li> 
                                </ul>
                            </div>
                        </div>
                    </div>                        
                </div>
            </>

    );
}


export default Navbar;

//{this.state.isLoggedIn ? (
//    <a onClick={this.changeIsLoggedInState}>Logout</a>
//    ) : (
 //      <a onClick={this.changeIsLoggedInState}>Login</a>
 //   )}

//{this.state.productsInCart !== 0 ? (
 //   <span class="badge badge-sm indicator-item bg-primary text-black">{this.state.productsInCart}</span>
//) : (
 //   <></>
//)}