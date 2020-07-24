import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 16px;
  box-shadow: 0 1px 4px 0 rgba(192,208,230, .8);
  border-top: 20px solid rgba(230, 236, 245, .4);
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-top: 8px;
  }

  ${props => props.isDragging && css `
    border: 2px dashed rgba(0,0,0,.2);
    padding-top: 32px;
    border-radius: 4px;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;

    p, img, header {
      opacity: 0;
    }
  `}
`;

export const Label = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  display: inline-block;
  background: ${props => props.color};
`;