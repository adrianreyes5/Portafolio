import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    @media screen and (min-width: 320px) {
        grid-template-rows: repeat(3, auto);
        grid-template-columns: repeat(1, 290px);
    } 
    @media screen and (min-width: 375px) {
        grid-template-columns: 360px;
    } 
    @media screen and (min-width: 576px) {
        grid-template-columns: 480px;
    } 
    @media screen and (min-width: 768px) {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(1, 1fr);
    } 
    @media screen and (min-width: 1024px) {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);
    } 
`
export const BorderTop = styled.hr`
    width: 60%;
    border: 0.5px solid #dddddd;
    margin: 20px auto;
`
export const Title = styled.h1`
    padding: 25px;
    text-align: center;

    @media screen and (max-width: 425px) {
        padding: 10px;
        font-size: 1.5em;
        text-align: center;
    }
`
export const Card = styled.div`
    margin: 20px 0;
    height: fit-content;
    border-radius: 5px;
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.75);
    border: 1px solid #fff;
    justify-self: center;

    @media screen and (min-width: 375px) {
        width: 350px;
        justify-self: center;
    } 
    @media screen and (min-width: 576px) {
        width: 460px;
        justify-self: center;
    } 
    @media screen and (min-width: 768px) {
        width: 502px;
        justify-self: center;
    } 
    @media screen and (min-width: 1024px) {
        width: 470px;
        justify-self: center;
    }
    @media screen and (min-width: 1440px) {
        width: 600px;
        justify-self: center;
    }
`
export const CardImg = styled.figure`
    margin: 0;
`
export const Img = styled.img`
    border-radius: 5px;
    width: 100%;
`
export const CardFooter = styled.div`
    padding: 10px 7px 10px 7px;
    display: grid;
    align-items: center;
    grid-template-rows: 40px auto 50px;

    @media screen and (max-width: 375px) {
        grid-template-rows: 40px auto 70px;
    }
    @media screen and (max-width: 320px) {
        grid-template-rows: 40px auto 140px;
    }
`
export const TitleFooter = styled.div`
    padding: 5px 0;
    h2 {
        color: #424242;
        font-weight: 600;
    }
`
export const DescFooter = styled.div`
    padding: 5px 19px 5px 0px;
    text-align: justify;
    small {
        color: #727272;
    }
`
export const DecButtons = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 320px) {
        flex-direction: column;
    }
    @media screen and (max-width: 375px) {
        justify-content: space-around;
    }
`
export const ImgSkillInline = styled.div`
    margin-left: auto;
    padding: 35px 8px 0px 0;

    @media screen and (max-width: 375px) {
        display: none;
    }
`
export const Button = styled.div`
    padding: 0px 5px 0px 0px;
    @media screen and (max-width: 375px) {
        padding: 6px;
    }
    @media screen and (max-width: 320px) {
        padding: 15px;
    }
`
export const Anchor = styled.a`
    text-align: center;
    padding: 6px 12px;
    border-radius: 5px;
    border: 1px solid transparent;
    background-color: #29a19c;
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    :hover {
        color: #fff;
        background-color: #217c78;
        border-color: #378e8a;
    }
    @media screen and (max-width: 320px) {
        padding: 9px 60px;
        padding: ${props => props.anchorWeb && '9px 77px'};
    }
`


// export const ImgWrapper = styled.div`
//     display: block;
//     height: 0;
//     overflow: hidden;
//     position: relative;
//     padding: 56.25% 0 0 0;
//     width: 100%;
// `