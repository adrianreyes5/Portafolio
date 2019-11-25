import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 768px) {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(1, 1fr);
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
`
export const Card = styled.div`
    width: 502px;
    margin: 20px 0;
    height: fit-content;
    border-radius: 5px;
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.75);
    border: 1px solid #fff;
    justify-self: center;

    @media screen and (max-width: 1024px) {
        width: 450px;
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
    padding: 10px 0px 10px 15px;
    padding: 10px 0px 10px 15px;
    display: grid;
    align-items: center;
    grid-template-rows: 40px 120px 50px;
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
export const Button = styled.div`
    padding: 15px 0 10px;
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
        background-color: #218838;
        border-color: #1e7e34;
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