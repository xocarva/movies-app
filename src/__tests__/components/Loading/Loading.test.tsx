import { render, screen } from '@testing-library/react';
import { Loading } from '../../../components';

describe('test Loading component', () => {

  test('should match snapshot', () => {

    const { container } = render(<Loading />);

    expect(container).toMatchSnapshot();

  });

  test('should set class correctly on div from props', () => {

    const className: string = 'elementClass';

    render(<Loading className={className}/>);

    const loadingDiv = screen.getByTestId('loading-div');

    expect(loadingDiv.className).toBe(className + ' loading');

  });

});
