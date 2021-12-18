import styled from 'styled-components'

export const Table = styled.div`
width:980px;
`

export const Header = styled.div`
color: #e16847;
font-weight:bold;
padding: 15px;
`

export const Row = styled.div`
display:flex;
flex-direction : row;
padding : 20px 15px 20px 15px;
border-bottom:1px solid #c8c3b0;
`

export const Cell = styled.div`
font-size :  14px;
margin-right:5px;
${({ align }) => align && `
    text-align: ${align};
  `}

${({ width }) => width && `
    width: ${width};
  `}
`
export const Body = styled.div`
height: 100vh;
overflow-y:scroll;
`
