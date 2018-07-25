import React, { Component } from 'react';

class Nav extends Component {
 
  componentDidMount() {
    this.activateMenuToggle();
  }

  activateMenuToggle() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {

          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);

          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <div className="navbar-brand">
          <a href="#" className="navbar-item">
            HOTEL LOGO
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <a href="#" className="navbar-item">
              Home
            </a>

            <a href="#" className="navbar-item">
              Rooms & Rates
            </a>

            <a href="#" className="navbar-item">
              Photos
            </a>

            <a href="#" className="navbar-item">
              About Us
            </a>

            <a className="navbar-item">
              <button href="#" className="button is-link is-small">
                Book Now
              </button>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;