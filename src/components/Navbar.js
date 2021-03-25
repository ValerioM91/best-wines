import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserButtons from './UserButtons';
import { AiOutlineMenu } from 'react-icons/ai';
import { useSidebarContext } from '../context/sidebar_context';
import links from '../utils/links';

const Navbar = () => {
  const { openSidebar } = useSidebarContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <button className="nav-toggle" onClick={openSidebar}>
          <AiOutlineMenu />
        </button>

        <div className="spacing"></div>
        <ul className="links">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        <UserButtons />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: absolute;
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.8);

  .nav-toggle {
    display: none;
    background: transparent;
    border: transparent;
    color: var(--white);
    outline: none;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-center {
    z-index: 1;
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    display: grid;
    grid-template-columns: 8rem 3fr auto;
    align-items: center;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;

    li a {
      color: var(--white);
      padding: 0 1rem;
      letter-spacing: 0.1rem;
    }
  }
  @media (max-width: 700px) {
    .nav-toggle {
      display: block;
    }
    .links {
      display: none;
    }

    .nav-center {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default Navbar;
