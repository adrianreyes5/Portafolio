import styled from 'styled-components'

export const Panel = styled.div`
    width: 100%;
    padding-top: 100px;
`
export const ProfileContent = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 220px 350px;
    grid-auto-rows: 200px 170px;
    @media screen and (max-width: 425px) {
        grid-template-rows: 220px 100px 250px;
        grid-template-columns: 500px;
    }

    /* grid-template-columns: repeat(2, 1fr); */
`
export const Content = styled.div`
    align-self: center;
    text-align: center;
    grid-column: ${props => props.contentGrow && "span 2"};
    font-size: 20px;
    color: #2D3748;

    @media screen and (max-width: 425px) {
        grid-column: ${props => props.contentGrow && "span 1"};
    }
`
export const ProfileImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`
export const Title = styled.h2`
    color: ${props => props.name ?
        "#2D3748"
        :
        "#2F855A"
    };
    font-size: 30px;
`
export const About = styled.article`
    width: 100%;
`
