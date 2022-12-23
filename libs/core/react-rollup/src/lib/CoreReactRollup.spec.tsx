import { render } from '@testing-library/react';

import CoreReactRollup from './CoreReactRollup';

describe('CoreReactRollup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreReactRollup />);
    expect(baseElement).toBeTruthy();
  });
});
