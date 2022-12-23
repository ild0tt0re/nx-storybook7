import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CoreReactRollupProps {}

const StyledCoreReactRollup = styled.div`
  color: pink;
`;

export function CoreReactRollup(props: CoreReactRollupProps) {
  return (
    <StyledCoreReactRollup>
      <h1>Welcome to CoreReactRollup!</h1>
    </StyledCoreReactRollup>
  );
}

export default CoreReactRollup;
