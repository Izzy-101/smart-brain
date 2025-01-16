import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    {/*pass a reference to a function instead of calling it */}
                    <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
                </nav>
            );
        } else {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>        
                    <p onClick={() => onRouteChange('Register')} className='f3 link dim black underline pa3 pointer'>Register</p>
                </nav>
            );
        }
}

export default Navigation;