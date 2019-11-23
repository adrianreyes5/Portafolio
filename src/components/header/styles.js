import styled from 'styled-components'

export const HeaderNav = styled.header`
    width: 100%;
    background-color: #343A40;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.5);
    position: fixed;
    z-index: 4;
`
export const ListMenu = styled.ul`
    width: 100%;
    display: inline-flex;
    justify-content: flex-end;
    padding: 20px;
    right: 0;

    @media screen and (max-width: 425px){
        justify-content: center;
    }
`
export const Option = styled.li`
    padding: 0 15px;
`
export const Anchor = styled.a`
    width: 100%;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    :hover {
        color: #d6d6d6;
    }
`