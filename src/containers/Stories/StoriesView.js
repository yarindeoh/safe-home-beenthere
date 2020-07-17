import React from 'react';

import { withRoute } from 'services/routing/routerHOC';
import { StoriesGalleryView } from 'containers/Stories/components/StoriesGallery/StoriesGalleryView';
import { TagsFilter } from 'containers/Stories/components/TagsFilter';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useTranslation } from 'react-i18next';

export const StoriesView = withRoute((props) => {
    const { t } = useTranslation();

    const changeLocationByPath = (path, params) => {
        props.history.push(path, params);
    };
    return (
        <div className="app">
            <Header />
            <button className={'BTN-accessibility'} />
            <h4 className={'const-text'}>
                {t('storiesView.header')}
            </h4>
            <StoriesGalleryView changeLocationByPath={changeLocationByPath} />
            <button
                className={'BTN-send-testimony'}
                onClick={() => props.history.push('addStory')}
            >
                {t('storiesView.addStory')}
            </button>
            <hr />
            <TagsFilter changeLocationByPath={changeLocationByPath} />
            <button className="BTN-help" />
            <Footer />
        </div>
    );
});
