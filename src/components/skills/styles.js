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
    grid-template-rows: repeat(3, 100px);
    grid-template-columns: repeat(4, 200px);
    justify-content: center;
    justify-items: center;

    @media screen and (max-width: 425px) {
        grid-template-rows: repeat(4, 100px);
        grid-template-columns: repeat(3, 150px);
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
        padding: 15px 0;
    }
`
export const ZoomIcon = styled.div`
    transition: transform .2s;

    :hover {
        transform: scale(1.5);
    }
`
