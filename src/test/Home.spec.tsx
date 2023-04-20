import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../app/home/page';

function setup(tsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(tsx),
  };
}

describe('Home', () => {
  it('Add new user', async () => {
    const { user, getByText, getByPlaceholderText } = setup(<Home />);

    const input = getByPlaceholderText('Nome');
    const addButton = getByText('Adiciona nova pessoa');

    user.type(input, 'Roger');
    user.click(addButton);

    expect(getByText('Eduardo')).toBeInTheDocument();
    expect(getByText('Roger')).toBeInTheDocument();
  });
});
