import React, {useContext} from 'react';

import { withRoute } from 'services/routing/routerHOC';
import { StoriesGalleryView } from 'containers/Stories/components/StoriesGallery/StoriesGalleryView';
import { TagsFilter } from 'containers/Stories/components/TagsFilter';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useTranslation } from 'react-i18next';
import HelpButton from 'src/components/HelpButton.js';
import AccessibilityIcon from 'src/media/icons/accessibility.svg';
import { AddStoryContext } from 'containers/AddStory/addStoryContext';



export const StoriesView = withRoute(props => {
    const { t } = useTranslation();
    const {addStoryData, setAddStoryData} = useContext(AddStoryContext)
    //TODO: ADD : YOUR STORY IS SUBMITTED form AddStoryContext


    const changeLocationByPath = (path, params) => {
        props.history.push(path, params);
    };
    return (
        <div className="app">
            <Header />
            <img className="AccessibilityButton" src={AccessibilityIcon} />
            <h4 className={'const-text'}>{t('storiesView.header')}</h4>
            <StoriesGalleryView changeLocationByPath={changeLocationByPath} />
            <button
                className={'BTN-send-testimony'}
                onClick={() => props.history.push('addStory')}
            >
                {t('storiesView.addStory')}
            </button>
            <TagsFilter changeLocationByPath={changeLocationByPath} />
            <HelpButton />
            <Footer />
        </div>
    );
});
