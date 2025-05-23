import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';

import Form from './Form';

const mockStore = configureStore();
const errorMessage =
  "[{'message': 'The specified email is not valid.', 'field': 'contact_email', 'error': 'ValidationError'}";

vi.mock('@plone/volto/components/manage/Form');

describe('Form', () => {
  it('renders a form component', () => {
    const store = mockStore({
      intl: {
        locale: 'en',
        messages: {},
      },
      content: {
        data: {},
        create: {
          loading: false,
          loaded: true,
        },
      },
    });
    const component = renderer.create(
      <Provider store={store}>
        <Form
          schema={{
            fieldsets: [
              {
                id: 'default',
                title: 'Default',
                fields: ['title'],
              },
            ],
            properties: {
              title: {},
            },
            required: [],
          }}
          requestError={errorMessage}
          onSubmit={() => {}}
          onCancel={() => {}}
        />
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
