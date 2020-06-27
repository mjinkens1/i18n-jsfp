import configure from '../.';

// Redux
import { actions } from '../../../redux';

describe('Function configure', () => {
  test('it throws an error when the wrong type is passed for the useAutoScopePrefix option', () => {
    expect(() => {
      configure({ useAutoScopePrefix: 'test' });
    }).toThrow();
  });

  test('it dispatches a SET_CONFIGURATION action with the correct configuration', () => {
    const mocksetConfiguration = jest.spyOn(actions, 'setConfiguration');
    configure({ useAutoScopePrefix: false });
    expect(mocksetConfiguration).toHaveBeenCalledWith({
      useAutoScopePrefix: false,
    });
  });
});
