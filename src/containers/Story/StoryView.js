import React from 'react';
import { withRoute } from 'services/routing/routerHOC';
import { Tags } from './components/Tags';
import { extractFieldsFromObj } from 'services/general/generalHelpers';
import { TagsFilter } from 'containers/Stories/components/TagsFilter';
import { useTranslation } from 'react-i18next';
import Skeleton from 'src/components/Skeleton';

export const StoryView = withRoute(props => {
    const { t } = useTranslation();
    const story = props.location.state;
    const changeLocationByPath = (path, params) => {
        props.history.push(path, params);
    };
    const processedStory = extractFieldsFromObj(story, [
        'background',
        'whatTriggeredChange',
        'howDidYouManged',
        'additionalnfo',
        'whatHelpedYou',
        'storyContent'
    ]);
    const defaultTagsSimilarStories = story.tags && story.tags.slice(0, 3);

    return (
        <Skeleton>
            <div id={'story-page-container'}>
                <div id={'story-page-content'}>
                    <div className={'quote'}>
                        <h1>"{story.quote}"</h1>
                        <h2>
                            {`
                     ${t('storyView.storyOf')}
                     ${story.name ? story.name.split('')[0] : t('storyView.anonymousTeller')}
                     ${story.createdAt}
                   `}
                        </h2>
                        <Tags tags={story.tags} />
                    </div>
                    {processedStory &&
                        Object.keys(processedStory).map((item, key) => (
                            <div key={key}>
                                <h6>{t(item)}</h6>
                                <span>{processedStory[item]}</span>
                                <br />
                            </div>
                        ))}
                </div>
                <TagsFilter
                    key={props.location.state._id}
                    defaultSelectedTags={defaultTagsSimilarStories}
                    changeLocationByPath={changeLocationByPath}
                />
            </div>
        </Skeleton>
    );
});
