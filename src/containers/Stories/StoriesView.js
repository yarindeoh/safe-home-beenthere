import React from 'react';

import lang from 'services/lang.json';
import { withRoute } from 'services/routing/routerHOC';
import { StoriesGalleryView } from 'containers/Stories/components/StoriesGallery/StoriesGalleryView';
import { TagsFilter } from 'containers/Stories/components/TagsFilter';
import { Header } from 'components/Header';
import { FooterWrapper } from 'containers/Story/components/FooterWrapper';

export const StoriesView = withRoute(props => {
    const changeLocationByPath = (path, params) => {
        props.history.push(path, params);
    };
    return (
        <div className="app">
            <Header />
            <button className={'BTN-accessibility'} />
            <h4 className={'const-text'}>בית לעדויות ממערכות יחסים אלימות</h4>
            <StoriesGalleryView changeLocationByPath={changeLocationByPath} />
            <button
                className={'BTN-send-testimony'}
                onClick={() => props.history.push('addStory')}
            >
                {lang.addStory}
            </button>
            <hr />
            <TagsFilter changeLocationByPath={changeLocationByPath} />
            <button className="BTN-help" />
            <FooterWrapper />
        </div>
    );
});
