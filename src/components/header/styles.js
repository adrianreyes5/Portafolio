import styled from 'styled-components'

export const HeaderNav = styled.header`
    display: grid;
    width: 100%;
    background-color: #393e46;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.5);
    position: fixed;
    z-index: 4;
`
export const ListMenu = styled.ul`
    display: grid;
    padding: 15px;
    right: 0;
    @media screen and (min-width: 320px){
        justify-content: center;
        grid-template-columns: 39px 259px;;
    }
    @media screen and (min-width: 375px){
        justify-content: center;
        grid-template-columns: 50px 1fr;
    }
    @media screen and (min-width: 768px){
        justify-content: space-between;
        grid-template-columns: 100px 1fr;
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
    @media screen and (min-width: 375px) {
        padding: ${props => props.rightAuto ? '0' : '0 8px' };
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
    :hover {
        color: #d6d6d6;
    }
    @media screen and (min-width: 320px){
        font-weight: 400;
    }
    @media screen and (min-width: 768px){
        font-weight: 600;
    }
`
export const LangOption = styled.option`
    background-color: #393e46;
    color: #fff;
    
    @media screen and (max-width: 375px ) {
        ::after {
            content: "ES"
        }
    }
`
export const Anchor = styled.a`
    width: 100%;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    
    :hover {
        color: #d6d6d6;
    }
    @media screen and (max-width: 375px){
        font-weight: 400;
        padding: 7px
    }
    @media screen and (min-width: 768px){
        font-weight: 600;
    }
`