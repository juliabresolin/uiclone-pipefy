import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 16px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? 0.6 : 1}; 

  & + div {
    border-left: 1px solid #e6ecf5;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
  
    h2 {
     font-weight: 600;
     font-size: 16px;
     padding: 0 8px; 
    }
    
    button {
      width: 42px;
      height: 42px;
      border-radius: 12px;
      background: #3b5bfd;
      border: 0;
      transition: 200ms linear 0s;
      cursor: pointer;

      &:hover {
        background: #243da3;
      }
    }
  }

  ul {
    margin-top: 24px;
    position: relative;

    span {
      position: absolute;
      text-align: center;
    }

  
  }

  .teste {
      opacity: 0 !important;
    }
`;
