import styled from 'styled-components'

export default styled.div`
  display: block;
  columns: 500px;
  gap: 20px;
  margin-top: 40px;

  > figure {
    break-inside: avoid;
    margin: 0 0 20px 0;
    transform: scale(1);
    overflow: hidden;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(0.95);
    }

    > img {
      width: 100%;
      display: block;
      transform: scale(1);
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`
