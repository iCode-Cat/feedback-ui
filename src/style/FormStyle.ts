import styled from 'styled-components';

export const FormStyle = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 92vh;
  .form {
    &__container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    &__errors {
      margin-top: 1rem;
    }
    &__error {
    }
  }
`;
