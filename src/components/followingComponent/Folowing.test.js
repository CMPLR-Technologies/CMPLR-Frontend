/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import SearchForm from './containers/SearchForm';
import MockedComponent from '../partials/MockedComponent.jsx';
import ItemList from './containers/ItemList';

const mockSearch=jest.fn();
const followHandle=jest.fn();

const setup = () => {
    const utils = render(<MockedComponent
        component={
            <SearchForm
                setSearch={mockSearch}
                handleSearchFollow={followHandle}
            />
        }
    />);
    const followBtn=screen.getByTestId('search_btn_following');
    const input = screen.getByTestId('inputof_following_search');
    return {
      input,followBtn,
      ...utils,
    };
  };
test('I enter a value to the input search', () => {
    const {input} = setup();

    fireEvent.change(input, {target: {value: 'jndnkjdnjk'}});
    expect(input.value).toBe('jndnkjdnjk');
    expect(mockSearch).toHaveBeenCalled();
  });

test('pressing follow will call the handleFollow',()=>{
    const {followBtn} = setup();
    fireEvent.click(followBtn);
    expect(followHandle).toHaveBeenCalled();
});


describe('2nd testcase for searchForm', () => {
    it('check the disability of follow button', () => {
        render(
            <MockedComponent
                component={
                    <SearchForm
                        search={'e'}
                    />
                }
            />
        );

        const followBtn=screen.getByTestId('search_btn_following');
        expect(followBtn).toBeDisabled();
    });
});

describe('3rd testcase for searchForm', () => {
    it('check the disability of follow button', () => {
        render(
            <MockedComponent
                component={
                    <SearchForm
                        search={'edjknkjn'}
                    />
                }
            />
        );

        const followBtn=screen.getByTestId('search_btn_following');
        expect(followBtn).toBeEnabled();
    });
});
