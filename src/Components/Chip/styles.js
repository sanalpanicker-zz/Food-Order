import styled from 'styled-components'

export const StatusChip = styled.div`
   width:50%;
   padding: 7px 7px;
   border-radius: 50px;
   display: inline-flex;
   justify-content:center;
   margin: 10px;
   background-color: ${props => props.config.color};
   color:white;
 `