import React from 'react';
import { useModerationStories } from 'containers/Moderation/moderationHooks';
import { useTranslation } from 'react-i18next';

import Edit from 'src/media/icons/Edit.svg';

export const ModerateStoriesList = ({ changeLocationByPath, title }) => {
    const { stories, hasMore, getByPage } = useModerationStories();
    const { t } = useTranslation();

    return (
        <div className={'stories-to-moderated-container'}>
            <h1>
                {t('login.listToModerate', { num: stories && stories.length })}
            </h1>

            <table className="stories-to-moderated-table">
                <thead>
                    <tr>
                        <th>{t('login.table.date')}</th>
                        <th>{t('login.table.name')}</th>
                        <th>{t('login.table.mail')}</th>
                        <th>{t('login.table.contact')}</th>
                    </tr>
                </thead>
                <tbody>
                    {stories &&
                        Object.keys(stories).map(key => {
                            return (
                                <tr
                                    onClick={() =>
                                        changeLocationByPath(
                                            `moderateStory/${stories[key]._id}`,
                                            stories[key]
                                        )
                                    }
                                    key={key}
                                >
                                    <td>{stories[key]?.createdAt}</td>
                                    <td>{stories[key]?.name}</td>
                                    <td>{stories[key]?.mail}</td>
                                    <td className={'edit-icon-container'}>
                                        {stories[key]?.contact
                                            ? t('login.table.yes')
                                            : t('login.table.no')}
                                        <Edit className={'edit-icon'} />
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};
