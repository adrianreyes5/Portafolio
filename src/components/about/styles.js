import styled from 'styled-components'

export const Panel = styled.div`
    width: 100%;
    padding-top: 100px;
    @media screen and (min-width: 375px) {
        padding-top: 70px;
    }
`
export const ProfileContent = styled.div`
    display: grid;
    justify-content: center;
    
    @media screen and (min-width: 375px) {
        grid-template-rows: 220px 100px 150px;
        grid-template-columns: 350px;
        align-items: center;
    }
    @media screen and (min-width: 576px) {
        grid-template-rows: 217px 130px;
        grid-template-columns: 250px 250px;
    }
    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 250px);
        grid-auto-rows: 200px 170px;
    }

    /* grid-template-columns: repeat(2, 1fr); */
`
export const Content = styled.div`
    align-self: center;
    text-align: center;
    grid-column: ${props => props.contentGrow && "span 2"};
    padding: ${props => props.contentGrow && "0 10px"};
    font-size: 20px;
    color: #2D3748;
    @media screen and (min-width: 375px) {
        grid-column: ${props => props.contentGrow && "span 1"};
    }
    @media screen and (min-width: 576px) {
        grid-column: ${props => props.contentGrow && "span 2"};
    }
    @media screen and (max-width: 576px) {
        font-size: ${props => props.contentGrow && "1.1em"};
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
        "#29a19c"
    };
    font-size: 30px;
    
    @media screen and (max-width: 576px) {
        font-size: 1.3em; 
    }
`
export const About = styled.article`
    width: 100%;
`
