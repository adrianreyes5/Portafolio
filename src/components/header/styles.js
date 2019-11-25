import styled from 'styled-components'

export const HeaderNav = styled.header`
    display: grid;
    width: 100%;
    background-color: #393e46;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.5);
    position: fixed;
    z-index: 4;
`
export const ListMenu = styled.ul`
    display: grid;
    grid-template-columns: 100px 1fr;
    padding: 15px;
    right: 0;
    @media screen and (min-width: 320px){
        justify-content: center;
    }
    @media screen and (min-width: 768px){
        justify-content: space-between;
    }
`
export const ListLeft = styled.div`
    justify-self: start;
`
export const ListRight = styled.div`
    justify-self: end;
    display: inline-flex;
`
export const Option = styled.li`
    @media screen and (min-width: 320px) {
        padding: 0 12px;
    }
    @media screen and (min-width: 768px) {
        padding: 0 15px;
    }
    margin-right: ${props => props.rightAuto && "auto"};
`
export const SelectLang = styled.select`
    background-color: initial;
    color: #fff;
    border: none;
    cursor: pointer;
    font-weight: 600;
    :hover {
        color: #d6d6d6;
    }
`
export const LangOption = styled.option`
    background-color: #393e46;
    color: #fff;
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