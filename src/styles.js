import styled from 'styled-components'
import Search from './Components/Search'

import splash from './Assets/images/splash.png';
import salad from './Assets/images/salad.png'


export const AppWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
`

export const AppBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(10px + 2vmin);
`

export const Splash = styled.img.attrs({
	src: splash
})`
    position: absolute;
    width:20%;
`;

export const Salad = styled.img.attrs({
	src: salad
})`
    position: absolute;
    bottom:0px;
    width:20%;
`;

export const OrderSearch = styled(Search)`
    right:10px;
`;

export const Label = styled.div`
    float:left;
    font-size : 40px;
`
export const Info = styled.div`
    text-align:center;
    display: block;
    float:left;
    font-size : 15px;
`

export const Banner = styled.div`
    padding: 10px;
    position: relative;
    display:flex;
    width:980px;
    height:50px;
`
