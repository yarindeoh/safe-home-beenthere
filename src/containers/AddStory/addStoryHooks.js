import React, { useState } from 'react';
import { AddStoryContext } from './addStoryContext';
import {
    NEW_STORY_INIT_DATA,
    SET_CONTACT,
    SET_STORY_DATA
} from './addStoryConstants';
import Api from './addStoryApi';

export function useAddStoryContext() {
    const context = React.useContext(AddStoryContext);
    if (context === undefined) {
        throw new Error(
            'AddStoryContext must be used within a AddStoryProvider'
        );
    }
    return context;
}

export const useCheckedContact = () => {
    const { addStoryState, dispatch } = useAddStoryContext();

    const handleCheckedContact = e => {
        dispatch({
            type: SET_CONTACT,
            payload: e.target.value === 'yes' ? true : false
        });
    };
    return {
        checkedContact: !addStoryState.contact ? 1 : 0,
        handleCheckedContact
    };
};

export const useFiledChange = () => {
    const { addStoryState, dispatch } = useAddStoryContext();
    const handleFiledChange = (e, filed) => {
        let newAddStoryData = { ...addStoryState };
        newAddStoryData[filed] = e.target.value;
        dispatch({ type: SET_STORY_DATA, payload: newAddStoryData });
    };

    return {
        handleFiledChange
    };
};

export const useSubmit = () => {
    const { addStoryState, dispatch } = useAddStoryContext();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        let addStoryDataToPost = { ...addStoryState };

        async function postData() {
            try {
                await Api.postAddStory(addStoryDataToPost);
                dispatch({
                    type: SET_STORY_DATA,
                    payload: NEW_STORY_INIT_DATA
                });
                setSubmitted(true);
            } catch (e) {
                console.error(e);
            }
        }
        postData();
    };

    return {
        submitted,
        setSubmitted,
        handleSubmit
    };
};

export const useBack = (props, setSubmitted) => {
    const back = e => {
        e.preventDefault();
        setSubmitted(false);
        props.history.push('/');
    };

    return {
        back
    };
};
