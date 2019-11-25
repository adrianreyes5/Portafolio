import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`
export const BorderTop = styled.hr`
    width: 60%;
    border: 0.5px solid #dddddd;
    margin: 50px auto;
`
export const Title = styled.div`
    text-align: center;
`
export const GridRow = styled.div`
    padding-top: 30px;
    display: grid;
    grid-template-rows: repeat(3, 130px);
    grid-template-columns: repeat(4, 200px);
    justify-content: center;
    justify-items: center;

    @media screen and (max-width: 425px) {
        grid-template-rows: repeat(4, 130px);
        grid-template-columns: repeat(3, 130px);
    }
`
export const SkillContent = styled.article`
    grid-column: span 4;
    justify-self: center;
    text-align: center;
    align-self: center;
    font-weight: 500;
    color: #727272;

    @media screen and (max-width: 425px) {
        grid-column: span 3;
        padding: 15px 5px;
    }
`

export const ZoomIcon = styled.a`
    transition: transform .2s;
    text-decoration: none;
    cursor: pointer;
    :hover {
        transform: scale(1.5);
    }
   
`
export const SkillText = styled.p`
    text-align: center;
    padding: 7px 5px;
    font-weight: 500;
    color: #727272;
`

