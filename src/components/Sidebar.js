import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { useSidebarContext } from '../context/sidebar_context';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import links from '../utils/links';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();
  const { loginWithRedirect, loggedUser, logout } = useUserContext();
  const { deleteCart } = useCartContext();

  return (
    <Wrapper>
      <aside className={`sidebar ${isSidebarOpen && 'show-sidebar'}`}>
        <button className="close-btn" onClick={closeSidebar}>
          <AiOutlineClose />
        </button>
        <ul className="links">
          <li>
            {loggedUser ? (
              <p
                className="user-btn"
                onClick={() => {
                  deleteCart();
                  logout();
                }}
              >
                Logout
              </p>
            ) : (
              <p className="user-btn" onClick={loginWithRedirect}>
                Login
              </p>
            )}
          </li>
          {links.map((link, index) => {
            return (
              <li key={index} onClick={closeSidebar}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            );
          })}
          <li>
            <Link to="/cart" onClick={closeSidebar}>
              Cart
            </Link>
          </li>
        </ul>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    height: 100vh;
    width: 100%;
    background: var(--white);
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    z-index: -5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
  }

  .close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 2rem;
    color: var(--primary);
    background: transparent;
    outline: none;
    border: none;
  }

  .user-btn {
    outline: none;
    font-size: 2.5rem;
    padding: 0.5rem;
    color: var(--primary);
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.3s;
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid var(--primary);
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
      font-size: 2.5rem;
      padding: 0.5rem;
      a {
        color: var(--primary);
        border-bottom: 1px solid transparent;
        transition: border-bottom 0.3s;
      }

      a:hover {
        border-bottom: 1px solid var(--primary);
      }
    }
  }

  .show-sidebar {
    transform: translateX(0);
    z-index: 99;
  }
`;

export default Sidebar;
