import React from 'react';
import CoolButton from './CoolButton';

const Navbar = () => {
  return( <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">

  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="logo" width="112" height="28"/>
    </a>
    <div className="navbar-start">
      <a href="# " className="navbar-item">
        Home
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
          <CoolButton isSmall isSuccess>Button 2</CoolButton>
        </div>
      </div>
    </div>
  </div>
</nav>
  );
}

export default Navbar;