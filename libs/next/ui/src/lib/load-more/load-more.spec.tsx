import { render } from '@testing-library/react';

import LoadMore from './load-more';

describe('LoadMore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoadMore />);
    expect(baseElement).toBeTruthy();
  });
});
